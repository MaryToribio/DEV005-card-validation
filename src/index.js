document.getElementById('botonValidar').addEventListener('click', function(e) {
        e.preventDefault()
        console.log('Quiero ir por chicharron de pescado');
    }) 

document.getElementById('botonValidar').addEventListener('click', validarNumeros)

function validarNumeros(e) {
    e.preventDefault()
    const numeroIngresados = document.getElementById("numeroTcIngresado").value;
    // alert(numeroIngresados);
    console.log(sumarNumeros(numeroIngresados));
}

function sumarNumeros(todoslosnumeros) {
    let numerosTransformados = parseInt(todoslosnumeros)
    const crerSuma = numerosTransformados + numerosTransformados
    return crerSuma
}

function algoritmoDeLuhn() {

    const numeroIngresadoString = numeroIngresado.toString();
    const numIngStringArray = Array.from(numeroIngresadoString);
    const numIngStringArrayInv = numIngStringArray.reverse();

    for (let index = 0; index < numIngStringArrayInv.length; index++) {
        const indiceNormal = index + 1;

    }


}