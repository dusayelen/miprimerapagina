function showAlert () { alert ("¡Hola, esta es una alerta de JavaScript!"); }

const form = document.getElementById ('myForm')

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email);
} 
// estos simbolos raros despues de regex son expresiones regulares (regex es traducido exp regulares)//

function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if(!validateEmail(email)) {
        alert('por favor ingrese un correo electrónico válido.');
    } else {
        alert('Correo electrónico enviado correctamente.')
    }
}
//el signo de ! en validateEmail es para negar la validación, es decir decir si no se valida el email//
//entonces es falso y arroja la alerta configurada de por favor ingrese un correo elec válido//

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    validateForm();    
})

document.querySelector("button.button-menu-toggle")
    .addEventListener("click",
        function() {
            document.querySelector(".nav-links").
                classList.toggle("nav-links-responsive")})
