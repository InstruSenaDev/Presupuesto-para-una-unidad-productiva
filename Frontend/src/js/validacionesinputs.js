// src/validations.js

/**
 * Valida si el correo electrónico tiene un formato válido.
 * @param {string} email - El correo electrónico a validar.
 * @returns {boolean} - True si el correo es válido, false de lo contrario.
 */
export function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }
  
  /**
   * Valida si la contraseña tiene al menos 6 caracteres.
   * @param {string} password - La contraseña a validar.
   * @returns {boolean} - True si la contraseña es válida, false de lo contrario.
   */
  export function validatePassword(password) {
    return password.length >= 6;
  }
  
  /**
   * Valida si un valor contiene solo letras y espacios.
   * @param {string} value - El valor a validar.
   * @returns {boolean} - True si el valor contiene solo letras y espacios, false de lo contrario.
   */
  export function validateLettersOnly(value) {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(value);
  }
  
  /**
   * Realiza las validaciones del formulario y actualiza los mensajes de error.
   * @param {HTMLFormElement} form - El formulario a validar.
   * @returns {boolean} - True si el formulario es válido, false de lo contrario.
   */
  export function validateForm(form) {
    const correo = form.querySelector('#correo');
    const contrasena = form.querySelector('#contrasena');
    const correoError = form.querySelector('#correo-error');
    const contrasenaError = form.querySelector('#contrasena-error');
    
    let valid = true;
    
    // Limpiar mensajes de error
    correoError.textContent = '';
    contrasenaError.textContent = '';
    
    // Validación de correo
    if (!validateEmail(correo.value)) {
      valid = false;
      correoError.textContent = 'Por favor, ingrese un correo electrónico válido.';
    }
    
    // Validación de contraseña
    if (!validatePassword(contrasena.value)) {
      valid = false;
      contrasenaError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    }
  
    // Validación de letras solo
    if (!validateLettersOnly(contrasena.value)) { // Cambia esto al campo adecuado si no es la contraseña
      valid = false;
      contrasenaError.textContent = 'El campo solo debe contener letras y espacios.';
    }
    
    return valid;
  }
  