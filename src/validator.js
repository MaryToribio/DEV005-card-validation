// creo un objeto 
const validator = {
  esUnaTarjetaValida : (numeroTarjeta) => {
    if(numeroTarjeta.length == 16){
      let arrayNumerico = invertirTarjeta(numeroTarjeta);
      arrayNumerico = multiplicarPares(arrayNumerico);
      const total = sumarElementosArray(arrayNumerico);
      if(total % 10 == 0){
        return true;
      }else{
        return false;
      }
    }else{
      return false
    }
  }
};


function invertirTarjeta(numeroTarjeta) {
  const arrayTarjeta = Array.from(numeroTarjeta).reverse();
  const arrayNumerico = arrayTarjeta.map((numeroString) => Number(numeroString));
  return arrayNumerico;  
}

 
function multiplicarPares(arrayNumerico) {
  for (let indice = 0; indice < arrayNumerico.length; indice++) {
    const indiceReal = indice + 1
    if (esPar(indiceReal)) {
      arrayNumerico[indice] = arrayNumerico[indice] * 2;

      if(esNumeroDosDigitos( arrayNumerico[indice] )){
        arrayNumerico[indice] = sumarDigitos(arrayNumerico[indice]);
      }
    }
  }
  return arrayNumerico;
}

function esPar(numero){
  return (numero % 2 ) == 0;
}

function esNumeroDosDigitos(numero){
  return numero >9;
}

function sumarDigitos(numero) {
  const numeroString = numero.toString();
  const arrayNumero = Array.from(numeroString);
  
  let acumulador = 0;
  arrayNumero.forEach((element) => {
      acumulador += Number(element);
  });
  return acumulador;
}

function sumarElementosArray(arrayNumerico){
  let total = 0;
  arrayNumerico.forEach((element) => {
    total += element;
  });
  return total
}

export default validator;
