//Cuando las variables y funciones se ejecutan antes de que se ejecute cualquier tipo de código
//cuando llamamos variables sin haberlas creado aún, esto nos manda un mensaje de Undefined

var miNombre;

miNombre = "Andrés";

//hoisting, retorna un error
console.log (edad);

var edad = 32;

//forma correcta
var edad = 32;

console.log("mi edad es: " + edad);