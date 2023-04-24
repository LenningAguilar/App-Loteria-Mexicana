
function actualizarValorRango() {
    let rango = document.getElementById("num-selector").value;
    let valor = document.getElementById("valor");
    valor.innerHTML = rango;
    return rango;
}

function miFuncion() {
    var valorActualizado = actualizarValorRango();
    localStorage.setItem("miValor", valorActualizado*1000);
}


miFuncion();