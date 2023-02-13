function numeroDeTarjeta() {
    let numero = document.getElementById("numeroDeTarjetaDeCredito").value;
    alert(numero);
    algoritmoDeLuhn(numero)
}

function algoritmoDeLuhn(numeroDeTarjeta) {
    let numeroDeTarjetaArray = Array.from(numeroDeTarjeta)
    let numeroDeTarjetaArrayInvertido = numeroDeTarjetaArray.reverse()
    for (let index = 0; index < numeroDeTarjetaArrayInvertido.length; index++) {
        let indiceNormal = index + 1;

    }


}