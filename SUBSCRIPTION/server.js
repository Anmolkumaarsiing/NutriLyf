const express = require('express');
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const razorpay = new Razorpay({
    key_id: 'rzp_test_tIoRzqbxbxlQkE',
    key_secret: 'OkaOvvk85ofPoRK1gwcT9m5K'
});

app.post('/payment', async (req, res) => {
    const paymentId = req.body.razorpay_payment_id;
    try {
        const payment = await razorpay.payments.fetch(paymentId);
        if (payment.status === 'captured') {
            res.redirect('success.html');
        } else {
            res.send('Payment failed');
        }
    } catch (error) {
        res.send('Error fetching payment details');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
