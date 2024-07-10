document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            
            var userData = [
                { email: 'anmol@gmail.com', password: 'anmol' },
                { email: 'archana@gmail.com', password: 'archana' },
                { email: 'harsh@gmail.com', password: 'harsh' },
                { email: 'mrunali@gmail.com', password: 'mrunali' },

                // Add more user data here as needed
            ];
    
            var validUser = userData.find(function(user) {
                return user.email === email && user.password === password;
            });
    
            if (validUser) {
                window.location.href = 'DASHBOARD/DASHBOARD.HTML';
            } else {
                alert('Invalid email or password');
            }
        });
    </script>
