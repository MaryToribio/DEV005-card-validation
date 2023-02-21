import validator from './validator.js';

document.getElementById("botonValidar").addEventListener("click", function(e) 
{ e.preventDefault();
  const numeroIngresado = document.getElementById("numeroTcIngresado").value
  const resultadoValidacion = validator.isValid(numeroIngresado)
  if(resultadoValidacion){
    alert("correcto")} else{
    alert("incorrecto")}
});
