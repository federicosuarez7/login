// Apenas se carga el documento HTML se comenzara a escuchar todo lo que sucede
// se ejecuta el codigo js incluso antes de que se carguen las hojas de estilo
document.addEventListener('DOMContentLoaded',function () {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('errorPassword');
    const confirmPasswordError = document.getElementById('errorConfirmPassword');

// Metodo que valida el formulario
    loginForm.addEventListener('submit',function(event) {
        event.preventDefault();
        validateForm();
    })
// Metodo que valida el mail
    emailInput.addEventListener('blur',function(){
        validateEmail();
    })
// Metodo que limpia el error cuando se vuelva a escribir en el input del mail
    emailInput.addEventListener('change',function(){
        clearError(emailError);
    })
// Metodo que limpia el error cuando se vuelva a escribir en el input del password
    passwordInput.addEventListener('change',function(){
        clearError(passwordError);
    })
// Metodo que limpia el error cuando se vuelva a escribir en el input del confirm password
    confirmPasswordInput.addEventListener('change',function(){
        clearError(confirmPasswordError);
    })

    function validateForm() {
        const isValidEmail = validateEmail();
        const isValidPassword = validatePassword();
        const passwordMatch = validatePasswordMatch();
        if (isValidEmail && isValidPassword &&passwordMatch) {
            saveToLocalStorage();
            alert('Has ingresado con exito');
        }
    }
    function validateEmail() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // eliminamos los espacios vacios y guardamos la entrada en una constante
        const emailValue = emailInput.value.trim();
        if (!emailRegex.test(emailValue)) {
            showError(emailError,'Ingresa un email valido');
            return false;
        }
        return true;
    }
    function validatePassword() {
        const passwordValue = passwordInput.value.trim();

        if (passwordValue.length <6) {
        showError(passwordError,'Ingresa una contraseña de al menos 6 caracteres');
        return false;
        }
        return true;
    }
    function validatePasswordMatch() {
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        if (passwordValue != confirmPasswordValue) {
            showError(confirmPasswordError,'Las contraseñas no coinciden');
            return false;
        }
        return true;
    }

    function showError(errorElement,message) {
        errorElement.innerHTML = message;
        errorElement.style.display = 'block';
    }

    function clearError(errorElement) {
        errorElement.innerHTML = '';
        errorElement.style.display = 'none';
    }

    function saveToLocalStorage() {
        const emailValue = emailInput.value.trim();
        localStorage.setItem('email',emailValue);
        const body = bodyBuilderJSON();
        console.log(body);
    }

    function bodyBuilderJSON(){
        return {
            "email": emailInput.value,
            "password": passwordInput.value
        }
    }


});