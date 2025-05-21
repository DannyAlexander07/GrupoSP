// formulario.ts

const form = document.getElementById('form') as HTMLFormElement;
const nombreInput = document.getElementById('nombre') as HTMLInputElement;
const correoInput = document.getElementById('correo') as HTMLInputElement;
const telefonoInput = document.getElementById('telefono') as HTMLInputElement;
const checkInput = document.getElementById('check') as HTMLInputElement;
const checkLabel = document.querySelector('label[for="check"]') as HTMLLabelElement;

function mostrarError(input: HTMLElement, mensaje: string) {
    let error = input.parentElement?.querySelector('.error') as HTMLElement;

    if (!error) {
        error = document.createElement('p');
        error.className = 'error';
        input.parentElement?.appendChild(error);
    }

    error.textContent = mensaje;
    error.style.color = 'red';
    error.style.fontSize = '0.8rem';
    error.style.marginTop = '0.3rem';
}

function eliminarError(input: HTMLElement) {
    const error = input.parentElement?.querySelector('.error');
    if (error) {
        error.remove();
    }
}

function validarCampoVacio(input: HTMLInputElement, campo: string): boolean {
    if (input.value.trim() === '') {
        mostrarError(input, `El campo ${campo} es obligatorio.`);
        return false;
    } else {
        eliminarError(input);
        return true;
    }
}

function validarNombre(input: HTMLInputElement): boolean {
    const nombreRegex = /^[a-zA-ZÀ-ÿ\s]+$/; 
    if (!nombreRegex.test(input.value.trim())) {
        mostrarError(input, 'El nombre solo puede contener letras y espacios.');
        return false;
    } else {
        eliminarError(input);
        return true;
    }
}

function validarCorreo(input: HTMLInputElement): boolean {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(input.value.trim())) {
        mostrarError(input, 'Ingresa un correo electrónico válido.');
        return false;
    } else {
        eliminarError(input);
        return true;
    }
}

function validarTelefono(input: HTMLInputElement): boolean {
    const telefonoRegex = /^\+?\d+$/;
    if (!telefonoRegex.test(input.value.trim())) {
        mostrarError(input, 'El teléfono tiene que ser válido.');
        return false;
    } else {
        eliminarError(input);
        return true;
    }
}

function validarCheck(input: HTMLInputElement, label: HTMLLabelElement): boolean {
    if (!input.checked) {
        label.style.color = 'red';
        return false;
    } else {
        label.style.color = '';
        return true;
    }
}

form.addEventListener('submit', function (e: SubmitEvent) {
    e.preventDefault();

    const nombreValido = validarCampoVacio(nombreInput, 'nombre') && validarNombre(nombreInput);
    const correoValido = validarCampoVacio(correoInput, 'correo') && validarCorreo(correoInput);
    const telefonoValido = validarCampoVacio(telefonoInput, 'teléfono') && validarTelefono(telefonoInput);
    const checkValido = validarCheck(checkInput, checkLabel);

    if (nombreValido && correoValido && telefonoValido && checkValido) {
        console.log('Formulario enviado exitosamente.');
        form.submit();
    } else {
        console.log('Corrige los errores antes de enviar.');
    }
});
