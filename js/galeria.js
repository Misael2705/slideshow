/*=============================================
OBJETO CON LAS PROPIEDADES DE LA GALERIA
=============================================*/

var pg = {

    imgGaleria: document.querySelectorAll("#galeria ul li img"),
    rutaImagen: null,
    cuerpoDom: document.querySelector("body")
}

/*=============================================
OBJETO CON LOS MÉTODOS DE LA GALERIA
=============================================*/

var mg = {

    inicioGaleria: function() {

        for (var i = 0; i < pg.imgGaleria.length; i++) {

            pg.imgGaleria[i].addEventListener ("click", mg.capturaImagen);
            
        }
    },

    capturaImagen: function(img) {

        pg.rutaImagen = img.currentTarget;

        mg.lightbox(pg.rutaImagen)
    },

    lightbox: function(img){

        pg.cuerpoDom.appendChild(document.createElement("div"));

    }
}

mg.inicioGaleria();