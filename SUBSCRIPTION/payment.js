document.addEventListener('DOMContentLoaded', function() {
    const basicButton = document.getElementById('pay-basic');
    const standardButton = document.getElementById('pay-standard');
    const premiumButton = document.getElementById('pay-premium');

    basicButton.addEventListener('click', function(e) {
        e.preventDefault();
        const amount = this.getAttribute('data-amount');
        initiateRazorpayPayment(amount);
    });

    standardButton.addEventListener('click', function(e) {
        e.preventDefault();
        const amount = this.getAttribute('data-amount');
        initiateRazorpayPayment(amount);
    });

    premiumButton.addEventListener('click', function(e) {
        e.preventDefault();
        const amount = this.getAttribute('data-amount');
        initiateRazorpayPayment(amount);
    });

    function initiateRazorpayPayment(amount) {
        const options = {
            key: 'rzp_test_tIoRzqbxbxlQkE', // Replace with your actual Razorpay key ID
            amount: amount,
            currency: 'INR',
            name: 'NutriLyf Subscription',
            description: 'Subscription Payment',
            image: 'https://nutrilyf.netlify.app/img/logo%20(5).png', // Optional
            handler: function(response) {
                alert('Payment successful: ' + response.razorpay_payment_id);
                // Redirect to payment success page or handle success as needed
                window.location.href = 'payment-done.html';
            },
            prefill: {
                name: 'John Doe',
                email: 'john.doe@example.com',
                contact: '9999999999'
            },
            notes: {
                address: 'NutriLyf Subscription Plan'
            },
            theme: {
                color: '#29D978'
            }
        };

        const rzp = new Razorpay(options);
        rzp.open();
    }
});
