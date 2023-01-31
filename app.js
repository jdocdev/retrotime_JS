
function hora_actual() {

    datos = new Date()
    horas = datos.getHours()
    minutos = datos.getMinutes()
    segundos = datos.getSeconds()

    str_segundo = new String (segundos)
    if (str_segundo.length == 1)
       segundos = "0" + segundos

    str_minuto = new String (minutos)
    if (str_minuto.length == 1)
       minutos = "0" + minutos

    str_hora = new String (horas)
    if (str_hora.length == 1)
       horas = "0" + horas

    tiempoPantalla = horas + " : " + minutos + " : " + segundos

    document.querySelector("#reloj").innerText =  tiempoPantalla;
    document.querySelector("#reloj").textContent =  tiempoPantalla;

    setTimeout(hora_actual, 1000);
}

hora_actual();


