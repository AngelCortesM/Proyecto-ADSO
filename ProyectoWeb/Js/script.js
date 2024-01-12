console.log("Script ejecutado");

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir la presentación del formulario por defecto
    submitForm();
});

document.getElementById('loginButton').addEventListener('click', function() {
    console.log("Botón clickeado");
    submitForm();
});

function submitForm() {
    var username = document.getElementById('inputUsername').value;
    var password = document.getElementById('inputPassword').value;
    var rememberMe = document.getElementById('rememberMe').checked;

    var errorMessage = document.getElementById('errorMessage');
    var successMessage = document.getElementById('successMessage');

    // Validación de campos vacíos
    if (!username.trim() || !password.trim()) {
        errorMessage.innerText = 'Por favor, complete todos los campos.';
        successMessage.innerText = '';
        return;
    }

    // Lógica de inicio de sesión simulada
    errorMessage.innerText = '';
    successMessage.innerText = 'Inicio de sesión exitoso. Redirigiendo...';

    // Código para manejar la opción "Recuérdame" (rememberMe)
    if (rememberMe) {
        console.log('Recuérdame activado');
    }

    setTimeout(function() {
        window.location.href = 'home.html';
    }, 2000);
}

// Función para verificar y enfocar el siguiente campo al presionar Enter
// Función para verificar y enfocar el siguiente campo al presionar Enter
function checkAndFocus(event, nextElementId) {
    var currentElement = event.target;
    var errorMessage = currentElement.closest('form').querySelector('#errorMessage');
    var successMessage = currentElement.closest('form').querySelector('#successMessage');

    if (event.key === 'Enter') {
        if (!currentElement.value.trim()) {
            errorMessage.innerText = 'Por favor, complete todos los campos.';
            successMessage.innerText = '';
            event.preventDefault();
            return;
        }

        errorMessage.innerText = '';
        successMessage.innerText = '';

        var nextElement = document.getElementById(nextElementId);
        if (nextElement) {
            nextElement.focus();
        }

        event.preventDefault();
    }
}

// Función para verificar y enviar el formulario al presionar Enter en el campo de contraseña
function checkAndSubmit(event, passwordElementId, loginButtonId) {
    var currentElement = event.target;
    var errorMessage = currentElement.closest('form').querySelector('#errorMessage');
    var successMessage = currentElement.closest('form').querySelector('#successMessage');

    if (event.key === 'Enter') {
        var passwordElement = document.getElementById(passwordElementId);
        var loginButton = document.getElementById(loginButtonId);

        if (!currentElement.value.trim() || !passwordElement.value.trim()) {
            errorMessage.innerText = 'Por favor, complete todos los campos.';
            successMessage.innerText = '';
            event.preventDefault();
            return;
        }

        errorMessage.innerText = '';
        successMessage.innerText = '';

        // Simular un clic en el botón de inicio de sesión
        if (loginButton) {
            loginButton.click();
        }

        event.preventDefault();
    }
}

// Función para alternar la apariencia del checkbox "Recuérdame"
function toggleCheckbox() {
    var rememberMeCheckbox = document.getElementById('rememberMe');
    var rememberIcon = document.getElementById('rememberIcon');

    if (rememberMeCheckbox && rememberIcon) {
        if (rememberMeCheckbox.checked) {
            rememberIcon.style.color = '#2196F3'; // Cambia el color a azul
        } else {
            rememberIcon.style.color = ''; // Restaura el color por defecto
        }
    }
}