const textArea = document.querySelector('cajon-texto')

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
  let textInput = textEscrito;
  
  if (!validarTexto(textInput)) {
    let Encriptado = encriptar(textInput);
    let resultado = document.querySelector('#msg');

    let retirarElementos = document.querySelector('.estadoInicial');
    let organizarRespuesta = document.querySelector('.resultado')
    
    retirarElementos.style.display='none';
    organizarRespuesta.style.display='flex';
    organizarRespuesta.style.flexdrection='column';
    organizarRespuesta.style.justifycontent='center';
    resultado.value = Encriptado;
    console.log(Encriptado);    
  }else {
    textEscrito = "";
  }
  // console.log(textEscrito);
}
function btnDesencriptar() {
  let textoEscrito = document.querySelector('.cajon-texto').value;
  let Desencriptado = desencriptar(textoEscrito);

  
  let resultado = document.querySelector('#msg');
  resultado.value = Desencriptado;
}
function btnCopiar() {
  let Copiado = document.querySelector('#msg').value;
  navigator.clipboard.writeText(Copiado);
  document.querySelector('.cajon-texto').value = "";
}


const letras = {"e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

function encriptar(textoEncriptado) {
  let Encriptado = "";
  for (const obj in letras) {
    Encriptado = textoEncriptado.replaceAll(obj, letras[obj]);
    textoEncriptado = Encriptado;
  }
  return (Encriptado);
}

function desencriptar(textoIngresado) {
  let Encriptado = "";
  for (const obj in letras) {
    Encriptado = textoIngresado.replaceAll(letras[obj], obj);
    textoIngresado = Encriptado;
  }
  return (Encriptado);
}
