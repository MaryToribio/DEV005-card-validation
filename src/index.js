import validator from './validator.js';
//detiene la ejecucion de (4-5) hasta que el doc html esta completo
//oculta la pantalla (seccion2 ) al inicio
document.addEventListener("DOMContentLoaded", (e) => {
  const pantallaResultado = document.getElementById("resultado")
  pantallaResultado.style.display = "none"
  console.log(e)
});

document.getElementById("botonValidar").addEventListener("click", function(e) 
{ e.preventDefault();
  const numeroIngresado = document.getElementById("numeroTcIngresado").value
  const resultadoValidacion = validator.isValid(numeroIngresado)

  const primeraPantalla = document.getElementById("formulario")

  const pantallaResultado = document.getElementById("resultado")

  const numeroEnmascarado = validator.maskify(numeroIngresado)

  //con inner sobre escribo mi etiqueta <p> y traigo mi variable enmascarado
  const numeroTarjeta = document.getElementById("numeroDeTarjeta")
  numeroTarjeta.innerHTML = numeroEnmascarado

  //se trae los datos de mes y anio y se usa innerhtml para sobreescribir en <p>
  const vencimientoDeTarjeta = document.getElementById("fechaDeVencimiento")
  vencimientoDeTarjeta.innerHTML = document.getElementById("mes").value + "/"+ document.getElementById("anio").value

  const selectTipoDeTarjeta = document.getElementById("tipodeTarjeta")
  const parrafoTipoDeTarjeta = document.getElementById("resTipoDeTarjeta")
  parrafoTipoDeTarjeta.innerHTML = selectTipoDeTarjeta.value;

  const tipoDeBanco = document.getElementById("bancos")
  const parrafoBanco = document.getElementById("TipoBanco")
  parrafoBanco.innerHTML = tipoDeBanco.value


  //usamos style.display para oculpar y que aparesca las secciones

  primeraPantalla.style.display = "none"
  pantallaResultado.style.display = "block"

  const  pResultadoValidacion = document.getElementById("respuesta")
  if(resultadoValidacion){
    pResultadoValidacion.innerHTML = "Tarjeta validada correctamente"
  } else{

    pResultadoValidacion.innerHTML = "Tarjeta invalida, verfique informacion ingresada"
  }
});