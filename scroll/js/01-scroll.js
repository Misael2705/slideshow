/*=============================================
EL OBJETO CON LAS PROPIEDADES DEL SCROLL
=============================================*/

var ps = {

    posicionScroll: 0,
    articulos: document.querySelectorAll("#scroll asticle"),
    cajaScroll: document.querySelector("#scroll")

}

/*=============================================
EL OBJETO CON LOS METODOS DEL SCROLL
=============================================*/

var ms = {
    
    inicioScroll: function() {

        document.addEventListener("scroll", ms.efectoParallax)

    },

    efectoParallax: function() {

        ps.posicionScroll = window.pageYOffset;

        if(ps.posicionScroll > ps.cajaScroll.offsetTop){

            for (var i = 0; i < ps.articulos.length; i++) {

                ps.articulos[i].style.marginLeft = ps.posicionScroll;
                
            }
        }

    }

}

ms.inicioScroll();