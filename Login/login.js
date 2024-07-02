// Apenas se carga el documento HTML se comenzara a escuchar todo lo que sucede
// se ejecuta el codigo js incluso antes de que se carguen las hojas de estilo
document.addEventListener('DOMContentLoaded',function () {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

// Metodo que valida el formulario
    loginForm.addEventListener('submit',function(event) {
        event.preventDefault();
    })
// Metodo que valida el mail
    emailInput.addEventListener('blur',function(){

    })
// Metodo que limpia el error cuando se vuelva a escribir en el input del mail
    emailInput.addEventListener('change',function(){
        
    })
// Metodo que limpia el error cuando se vuelva a escribir en el input del password
    passwordInput.addEventListener('change',function(){
        
    })
// Metodo que limpia el error cuando se vuelva a escribir en el input del confirm password
    confirmPasswordInput.addEventListener('change',function(){
        
    })
});