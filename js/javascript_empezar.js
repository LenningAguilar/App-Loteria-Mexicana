//Agregar las imagenes a un array
function agregarImagenesArray(){
    let arrayOriginal = [];
    for(let i = 1; i <= 54; i++){
        arrayOriginal.push({src: `img/loteria_imagenes/loteria_(${i}).jpg`, alt: `Descripción de la imagen ${i}`});
    }
    return arrayOriginal;
}

//Funcion retorna un arreglo ordenado de manera aleatoria
function arregloAleatorio(arreglo) {
    //Copiar arreglo con spread operator
    //let nuevoArreglo = [...arreglo];
    //copiar arreglo con map
    let nuevoArreglo = arreglo.map((arreglo) => arreglo);
    nuevoArreglo.sort(() => Math.random() - 0.5);
    return nuevoArreglo;
}


//Funcion que muestra cada imagen en la eitqueta mi-imagen y aumenta la barra de progreso
function mostrar(tiempo, copiaArray){    
    var indice = 0;
    // Obtener la etiqueta <img> desde HTML utilizando su id
    let miImagen = document.getElementById("mi-imagen");
    let progressBar = document.getElementById("progress");
   
    let contenedor = document.getElementById("main__imagenes");
    setInterval(function(){
        miImagen.src = copiaArray[indice].src;
        miImagen.alt = copiaArray[indice].alt;

        let imagen = document.createElement("img");
        imagen.setAttribute("src", copiaArray[indice].src);
        contenedor.appendChild(imagen);
        indice++;

        let progress = ((indice)/copiaArray.length)*100;
        progressBar.value = progress;
        if(indice == copiaArray.length){
            inidce = 0;
        }
    },tiempo);
}

function obtenerValor(){
    let miValor = localStorage.getItem("miValor");
    return miValor;
}


let valor = obtenerValor();
mostrar(valor, arregloAleatorio(agregarImagenesArray()));
