//condicionales (reglas para poder validad si algo es verdadero o falso)

if (true){
    console.log("hola");
}
//retorna hola

if (false){
    console.log("hola");
}
//retorna undefined

if (true) {
    console.log("Hola");
}else{
    console.log("soy falso");
}
//retorna HOLA


if (false) {
    console.log("Hola");
}else{
    console.log("soy falso");
}
//retorna SOY FALSO

//else if
var edad = 18;

if (edad === 18) {
    console.log("Puedes vota, tu primera votación");
}else if(edad > 18) {
    console.log("puedes votar de nuevo");
}else {
    console.log("Aún no puedes votar");
}
//retorna Puedes vota, tu primera votación


//Operador ternario reemplaza el if, else en una sola linea
condition ? true : false;

//ejemplo
var num = 1;

var resultado = num === 1 ? "Si soy un uno" : "no soy uno";