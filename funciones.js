//funciones declarativas (function declaration / function statement)
function saludar(nombre){
    console.log("Hola ${nombre}");
}

//llamar función declarativa
saludar ("Andrés");

//expresiones de función (function expression / funciones anonimas)
var nombre = function(nombre){ //la función es anónima por lo que no lleva nombre, aunque es válido ponerle nombre
    console.log("Hola ${nombre}");
}
//llamar expresión de función
nombre ("Andrés");
