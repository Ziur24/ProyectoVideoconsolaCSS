
const parteSuperior = document.getElementById("capaSuperior")
const parteInferior = document.getElementById("capaInferior")


function posicion(parte){
    let localizacion = parte.getBoundingClientRect();

    return localizacion.top
}


var intervaloOk = false;
let timer;
function intervalo(){   

    if (intervaloOk==false){
        timer = setInterval(mov1, 5);
        intervaloOk=true;
        
    }else{
        clearInterval(timer);
        intervaloOk=false;
    }

}
var contGrupo=0;
var estado="off";

function mov1(){
    
    
    if (estado=="off"){

        if (posicion(parteInferior)<110 && contGrupo <=230){
            contGrupo++;
            parteSuperior.style.top = contGrupo * 0.03 + "em";
            parteInferior.style.marginTop = contGrupo * 0.03 + "em";
            }
        
        else if (posicion(parteSuperior)>-110 && contGrupo >-230){
                contGrupo--;
                parteSuperior.style.top = contGrupo * 0.03 + "em";
                }
        
        else{
                clearInterval(timer);
                estado="on";
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
                estado="off";
                }

    }

}


   
    
