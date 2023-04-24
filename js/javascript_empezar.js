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
    /// Obtener la etiqueta <Progress> desde HTML utilizando su id
    let progressBar = document.getElementById("progress");
   // Obtener la etiqueta <div> desde HTML utilizando su id
    let contenedor = document.getElementById("main__imagenes");
    setInterval(function(){
        //Cada vez que se itere se anadira en la etiqueta la nueva im agen
        miImagen.src = copiaArray[indice].src;
        miImagen.alt = copiaArray[indice].alt;

        //Crear un elemento img
        let imagen = document.createElement("img");
        //Establece ela tribbuto src a dicha imnagen
        imagen.setAttribute("src", copiaArray[indice].src);
        //Agrega cada imagen al contenedor div
        contenedor.appendChild(imagen);
        //Moverse a la derecha del scroll
        contenedor.scrollLeft = contenedor.scrollWidth;
        indice++;

        //Calcula el valor de 0  hasta 10 para au8mentar la barra de progreso
        let progress = ((indice)/copiaArray.length)*100;
        progressBar.value = progress;
        // if(indice == copiaArray.length){
        //     inidce = 0;
        // }
    },tiempo);
}

//Obtener el valor del Local Stroge
function obtenerValor(){
    let miValor = localStorage.getItem("miValor");
    return miValor;
}


let valor = obtenerValor();
mostrar(valor, arregloAleatorio(agregarImagenesArray()));