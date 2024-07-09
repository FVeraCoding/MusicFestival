const galeria = document.querySelector(".galeria-fotos");
const cantidadImagenes = 16;


for(let i = 1; i<=cantidadImagenes; i++){

    const imagen = document.createElement("IMG");
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = "Imagen Galería";

    galeria.appendChild(imagen);

    imagen.onclick = function(){
        mostrarImagen(i);
    }
}

function mostrarImagen(i){
    const modal = document.createElement("DIV");
    const imagen = document.createElement("IMG");
    const body = document.querySelector("body");

    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = "Imagen Galería";

    modal.classList.add("modal");
    modal.appendChild(imagen);

    body.classList.add("overflow-hidden");
    body.appendChild(modal);

    modal.onclick = function(){
        cerrarModal();
    }

}

function cerrarModal(){
    const modal = document.querySelector(".modal");
    const body = document.querySelector("body");
    modal?.remove();
    body.classList.remove("overflow-hidden");
    
}


