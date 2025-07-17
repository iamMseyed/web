document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('myForm');
    var inputs = form.querySelectorAll('input');

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);

    form.addEventListener('reset', function (event) {
        inputs.forEach(input => {
            input.classList.remove('is-invalid');
            input.classList.remove('is-valid');
        });
        form.classList.remove('was-validated');
    }, false);

    inputs.forEach((input) => {
        input.addEventListener('input', function() {
            validateField(input);
            form.classList.remove('was-validated');
        });
    });
});

function validateField(input) {
    const username = document.getElementById("username").value;
    const password = document.getElementById('password').value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    
    switch (input.id) {
        case "username":
            if (username === "" || username.length < 3 || username.length > 20) {
                input.classList.add("is-invalid");
                document.getElementById('msgUsername').innerHTML =
                    username === "" ? 'Username is required' : 'Username should be between 3 and 20 characters';
                return false;
            } else {
                input.classList.remove("is-invalid");
                input.classList.add("is-valid");
            }
            break;
        case "password":
            if (password === "") {
                input.classList.add('is-invalid');
                document.getElementById('msgPassword').innerHTML = 'Password is required';
                return false;
            } 
            if (password.length < 2) {
                input.classList.add('is-invalid');
                document.getElementById('msgPassword').innerHTML = 'Password should be greater than 2 characters';
                return false;
            } 
            if (password.length > 8) {
                input.classList.add('is-invalid');
                document.getElementById('msgPassword').innerHTML = 'Password should be less than 8 characters';
                return false;
            } 
            if (!password.includes('#')) {
                input.classList.add('is-invalid');
                document.getElementById('msgPassword').innerHTML = 'Password must contain #';
                return false;
            } 
            if (!password.includes('*')) {
                input.classList.add('is-invalid');
                document.getElementById('msgPassword').innerHTML = 'Password must contain *';
                return false;
            } 
            if (!password.includes('@')) {
                input.classList.add('is-invalid');
                document.getElementById('msgPassword').innerHTML = 'Password must contain @';
                return false;
            } 
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            break;
        case "name":
            if (name === "") {
                input.classList.add("is-invalid");
                document.getElementById('msgName').innerHTML = 'Name is required';
                return false;
            } else {
                input.classList.remove("is-invalid");
                input.classList.add("is-valid");
            }
            break;
        case "email":
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (email === "" || !emailPattern.test(email)) {
                input.classList.add("is-invalid");
                document.getElementById('msgEmail').innerHTML =
                    email === "" ? 'Email is required' : 'Email format is incorrect';
                return false;
            } else {
                input.classList.remove("is-invalid");
                input.classList.add("is-valid");
            }
            break;
        case "age":
            if (age === "" || age < 18 || age > 100) {
                input.classList.add("is-invalid");
                document.getElementById('msgAge').innerHTML =
                    age === "" ? 'Age is required' : 'Age must be between 18 and 100';
                return false;
            } else {
                input.classList.remove("is-invalid");
                input.classList.add("is-valid");
            }
            break;
    }

    return true;
}

function validateForm() {
    const inputs = document.querySelectorAll('#myForm input');
    let isValid = true;

    inputs.forEach((input) => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

function togglePassword() {
    var eyeIcon = document.getElementById('eyeIcon');
    var passwordField = document.getElementById('password');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.classList.remove('far', 'fa-eye');
        eyeIcon.classList.add('far', 'fa-eye-slash');
    } else {
        passwordField.type = 'password';
        eyeIcon.classList.remove('far', 'fa-eye-slash');
        eyeIcon.classList.add('far', 'fa-eye');
    }
}