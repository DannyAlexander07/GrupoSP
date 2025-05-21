"use strict";
const form = document.getElementById('form');
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const telefonoInput = document.getElementById('telefono');
const checkInput = document.getElementById('check');
const checkLabel = document.querySelector('label[for="check"]');
function mostrarError(input, mensaje) {
    var _a, _b;
    let error = (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('.error');
    if (!error) {
        error = document.createElement('p');
        error.className = 'error';
        (_b = input.parentElement) === null || _b === void 0 ? void 0 : _b.appendChild(error);
    }
    error.textContent = mensaje;
    error.style.color = 'red';
    error.style.fontSize = '0.8rem';
    error.style.marginTop = '0.3rem';
}
function eliminarError(input) {
    var _a;
    const error = (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('.error');
    if (error) {
        error.remove();
    }
}
function validarCampoVacio(input, campo) {
    if (input.value.trim() === '') {
        mostrarError(input, `El campo ${campo} es obligatorio.`);
        return false;
    }
    else {
        eliminarError(input);
        return true;
    }
}
function validarNombre(input) {
    const nombreRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
    if (!nombreRegex.test(input.value.trim())) {
        mostrarError(input, 'El nombre solo puede contener letras y espacios.');
        return false;
    }
    else {
        eliminarError(input);
        return true;
    }
}
function validarCorreo(input) {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(input.value.trim())) {
        mostrarError(input, 'Ingresa un correo electrónico válido.');
        return false;
    }
    else {
        eliminarError(input);
        return true;
    }
}
function validarTelefono(input) {
    const telefonoRegex = /^\+?\d+$/;
    if (!telefonoRegex.test(input.value.trim())) {
        mostrarError(input, 'El teléfono tiene que ser válido.');
        return false;
    }
    else {
        eliminarError(input);
        return true;
    }
}
function validarCheck(input, label) {
    if (!input.checked) {
        label.style.color = 'red';
        return false;
    }
    else {
        label.style.color = '';
        return true;
    }
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombreValido = validarCampoVacio(nombreInput, 'nombre') && validarNombre(nombreInput);
    const correoValido = validarCampoVacio(correoInput, 'correo') && validarCorreo(correoInput);
    const telefonoValido = validarCampoVacio(telefonoInput, 'teléfono') && validarTelefono(telefonoInput);
    const checkValido = validarCheck(checkInput, checkLabel);
    if (nombreValido && correoValido && telefonoValido && checkValido) {
        console.log('Formulario enviado exitosamente.');
        form.submit();
    }
    else {
        console.log('Corrige los errores antes de enviar.');
    }
});
//# sourceMappingURL=formulario.js.map