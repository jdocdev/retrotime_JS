function hora_actual() {

    let datos = new Date();
    let horas = datos.getHours();
    let minutos = datos.getMinutes();
    let segundos = datos.getSeconds();

    let str_segundo = new String (segundos)
    if (str_segundo.length == 1)
       segundos = "0" + segundos

    let str_minuto = new String (minutos)
    if (str_minuto.length == 1)
       minutos = "0" + minutos

    let str_hora = new String (horas)
    if (str_hora.length == 1)
       horas = "0" + horas

    let tiempoPantalla = horas + " : " + minutos + " : " + segundos;

    document.querySelector("#reloj").innerText =  tiempoPantalla;
    document.querySelector("#reloj").textContent =  tiempoPantalla;

    setTimeout(hora_actual, 1000);
}

hora_actual();


