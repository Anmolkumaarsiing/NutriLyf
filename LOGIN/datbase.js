var userData = []; // Array to store user data

// Function to add a new user to the database
function addUser(name, email, password) {
    userData.push({ name: name, email: email, password: password });
}

// Function to check if a user exists in the database
function userExists(email) {
    return userData.some(user => user.email === email);
}

// Function to authenticate a user
function authenticateUser(email, password) {
    return userData.find(user => user.email === email && user.password === password);
}
