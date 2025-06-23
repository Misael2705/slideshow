/*=============================================
EL OBJETO CON LAS PROPIEDADES DEL MOUSE
=============================================*/

var pm = {

    zona: document.querySelector("#efectoMouse"),
    figuras: document.querySelectorAll("#efectoMouse figure")

}

/*=============================================
EL OBJETO CON LOS METODOS DEL MOUSE
=============================================*/

var mm = {

    inicioMouse: function (){

        pm.zona.addEventListener("mousemove", mm.movimientoMouse);

        for (var i = 0; i < pm.figuras.length; i++) {
            
            pm.figuras[i].innerHTML = '<img src = "mouse/plano0' +i+'.png">';
            pm.figuras[i].style.zIndex = -i;
            
        }

        setTimeout(function(){

            pm.zona.style.height = pm.figuras[0].childNodes[0].height + "px";

        }, 1000)

    },

    movimientoMouse: function(mouse){

        //console.log(mouse.offsetX, mouse.offsetY)

    }

}

mm.inicioMouse();