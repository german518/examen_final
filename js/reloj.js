
function fechaActual() {
    
    var fecha = new Date();

    horas = fecha.getHours();
    minutos = fecha.getMinutes();
    
    if (minutos < 10) { minutos = "0" + minutos};
    
    var pageReloj = document.getElementById("reloj");
    pageReloj.innerHTML = `Madrid ${horas}:${minutos}`

    setTimeout('fechaActual()',1000);


}

fechaActual();

function horaLondres(){
    
    var londonTime = new Date().toLocaleString("en-US", {timezone:"Europe/London"});
    londonTime=new Date(londonTime);
    console.log('Londres'+ londonTime.toLocaleString());
    }


horaLondres()