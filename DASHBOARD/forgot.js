document.addEventListener("DOMContentLoaded", function() {
    var resetButton = document.querySelector(".reset-button");
    var userEmailInput = document.getElementById("user_email");
    var resultsDiv = document.getElementById("results");
    var userDatabase = ["anmol@gmail.com"];
    resetButton.addEventListener("click", function(event) {
        event.preventDefault();
        var userEmail = userEmailInput.value.trim().toLowerCase();
        if (userDatabase.includes(userEmail)) {
            resultsDiv.innerHTML = "<p>Password has been sent to your email</p>";
        } else {
            resultsDiv.innerHTML = "<p>No user found! Please check your email address and try again</p>";
        }
    });
});
