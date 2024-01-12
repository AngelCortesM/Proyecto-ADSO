document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir la presentación del formulario por defecto
    submitForm();
});

function submitForm() {
    var username = document.getElementById('inputUsername').value;
    var password = document.getElementById('inputPassword').value;
    var rememberMe = document.getElementById('rememberMe').checked;

    var errorMessage = document.getElementById('errorMessage');
    var successMessage = document.getElementById('successMessage');

    if (!username || !password) {
        errorMessage.innerText = 'Por favor, complete todos los campos.';
        successMessage.innerText = '';
        return;
    }

    errorMessage.innerText = '';
    successMessage.innerText = 'Inicio de sesión exitoso. Redirigiendo...';

    // Aquí puedes agregar código para manejar la opción "Recuérdame" (rememberMe)
    if (rememberMe) {
        // Guarda el estado de "Recuérdame" (puedes usar localStorage, cookies, etc.)
        console.log('Recuérdame activado');
    }

    setTimeout(function() {
        window.location.href = 'home.html';
    }, 2000);
}



function checkAndFocus(event, nextElementId) {
    var currentElement = event.target;
    var errorMessage = document.getElementById('errorMessage');
    var successMessage = document.getElementById('successMessage');

    if (event.key === 'Enter') {
        if (!currentElement.value.trim()) {
            errorMessage.innerText = 'Por favor, complete todos los campos.';
            successMessage.innerText = '';
            event.preventDefault();
            return;
        }

        errorMessage.innerText = '';
        successMessage.innerText = '';

        document.getElementById(nextElementId).focus();
        event.preventDefault();
    }
}

function checkAndSubmit(event, currentElementId, buttonId) {
    var currentElement = event.target;
    var errorMessage = document.getElementById('errorMessage');
    var successMessage = document.getElementById('successMessage');

    if (event.key === 'Enter') {
        if (!currentElement.value.trim()) {
            errorMessage.innerText = 'Por favor, complete todos los campos.';
            successMessage.innerText = '';
            event.preventDefault();
            return;
        }

        errorMessage.innerText = '';
        successMessage.innerText = '';

        // Activar el botón de inicio de sesión
        document.getElementById('loginButton').click(); // Cambié buttonId por 'loginButton'
    }
}

function toggleCheckbox() {
    var checkbox = document.getElementById('rememberMe');
    var checkmarkIcon = document.querySelector('.checkmark i');
    var rememberText = document.getElementById('rememberText');

    checkbox.checked = !checkbox.checked;

    checkbox.checked ? checkmarkIcon.classList.add('checked') : checkmarkIcon.classList.remove('checked');

    // Actualiza el ícono de FontAwesome según el estado del checkbox
    checkmarkIcon.innerHTML = checkbox.checked ? '<i class="fa-solid fa-square-check"></i>' : '<i class="fa-solid fa-square"></i>';

    rememberText.innerText = checkbox.checked ? 'Recuérdame' : 'No recuérdame';

    var event = new Event('change', {
        bubbles: true,
        cancelable: false
    });
    checkbox.dispatchEvent(event);
}