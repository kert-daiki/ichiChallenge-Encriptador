const textArea = document.querySelector('cajon-texto')
let mensaje = document.querySelector('#msg');
mensaje.value = 'prueba de texto';

// valida el texto para cumplimiento de reglas 
function validarTexto(texto) {
  let caracteres = /!@#$%^&*()_+/g;
  let mayus = /[A-Z]/g;
  let vacio = "";

  if (texto.match(mayus) || texto.match(caracteres)){
    alert('No se pueden usar caracteres especiales ni mayusculas')
    location.reload();
    return true;
  } if (texto == vacio) {
    alert('Ingrese un texto para encriptar')
    return true;
  }else {
    return false;
  }
}

function btnEncriptar() {
  let textEscrito = document.querySelector('.cajon-texto').value;
  validarTexto(textEscrito);
  if (!validarTexto(textEscrito)) {
    mensaje.value = textEscrito;
  }
  // console.log(textEscrito);
}
