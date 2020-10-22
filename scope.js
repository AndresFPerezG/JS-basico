//Scope es el alcance que tienen las variables

//scope global = no se pueden usar variables del SCOPE LOCAL de una FUNCIÓN
var nombre ="Andrés";

function nombre(){
    //scope local = se pueden usar variables del SCOPE GLOBAL
    var miApellido ="Pérez";
    console.log(nombre + " " + miApellido); //se usa la variable global nombre dentro de la función
}

nombre();