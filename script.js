
/* Listener de click */
const pulsar = document.getElementById("btnEncendido");
pulsar.addEventListener("click", intervalo);



/* Obtiene posición de los layout */
const parteSuperior = document.getElementById("capaSuperior");
const parteInferior = document.getElementById("capaInferior");

function posicion(parte){
    let localizacion = parte.getBoundingClientRect();
    return localizacion.top
}

/* Enciende el led */
function encender(estado){

    const ledEncendido = document.getElementById("ledEncendido");   
    

    if (estado == "on"){
    
        let color = ledEncendido.style.background="green";
    
    } else {

        let color = ledEncendido.style.background="white";
    }
}

/* Contador de tiempo */
var intervaloOk = false;
let timer;

function intervalo(){   
    
    if (intervaloOk==false){

        timer = setInterval(mov, 5);
        intervaloOk=true;
        
    }else{
        
        clearInterval(timer);
        intervaloOk=false;
    }

}

/* Desplazamiento de los laout */
var contGrupo=0;
var estado="off";

function mov(){
    
    
    if (estado=="off"){
        
        if (parteInferior.style.marginTop != "6em"){
            contGrupo++;
            parteSuperior.style.top = contGrupo * 0.03 + "em";
            parteInferior.style.marginTop = contGrupo * 0.03 + "em";
            }
        
        else if (parteSuperior.style.top != "-6.3em"){
                contGrupo--;
                parteSuperior.style.top = contGrupo * 0.03 + "em";
                }
        
        else{
                clearInterval(timer);
                intervaloOk=false;
                estado="on";
                encender(estado);
                playVideo();
                }
    } else {

        if (posicion(parteSuperior) != posicion(parteInferior)){
                contGrupo++;
                parteSuperior.style.top = contGrupo * 0.03 + "em";
                }

        else if  (contGrupo >=1){
                contGrupo--;
                parteSuperior.style.top = contGrupo * 0.03 + "em";
                parteInferior.style.marginTop = contGrupo * 0.03 + "em";
                }

        else{
                clearInterval(timer);
                intervaloOk=false;
                estado="off";
                encender(estado);
            }

    }

}

/* Play video startup */

let cntVideo = document.getElementById("display");

function playVideo(){
    cntVideo.play();
}