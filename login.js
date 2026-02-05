// JavaScript for login validation

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
    }

    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        errorMessage.textContent = '';
        // Redirect to another page or perform other actions
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});