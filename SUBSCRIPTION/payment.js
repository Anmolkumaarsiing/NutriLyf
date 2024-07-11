document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const amount = this.getAttribute('data-amount');

            // Call your function to initiate payment with Razorpay
            initiateRazorpayPayment(amount);
        });
    });

    function initiateRazorpayPayment(amount) {
        // Replace with your Razorpay key ID
        const razorpayKey = 'rzp_test_tIoRzqbxbxlQkE';

        var options = {
            key: razorpayKey,
            amount: amount,
            currency: 'INR',
            name: 'NutriLyf Subscription',
            description: 'Subscription Payment',
            image: 'https://your-logo-url.com/logo.png', // Optional
            handler: function(response) {
                alert('Payment successful: ' + response.razorpay_payment_id);
                // You can redirect to a success page or handle success as per your application flow
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
                color: '#F37254'
            }
        };

        var rzp = new Razorpay(options);
        rzp.open();
    }
});
