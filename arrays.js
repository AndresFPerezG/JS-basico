var frutas = ["banano", "manzana", "pera", "naranja"];

console.log(frutas); //muestra los elementos que tiene el array = "banano", "manzana", "pera", "naranja"
console.log(frutas[2]); //muestra el elemento en la posición 2 = "Pera"
console.log(frutas.length); //muestra la cantidad de elementos en el array = 4

//Métodos para modificar el array
var masFrutas = frutas.push("uvas"); //añade elementos al final del array
var quitarFruta = frutas.pop("uvas"); //quita el elemento posicionado en el último elemento del array
var nuevaFruta = frutas.unshift("mandarina"); //añade elementos al inicio del array
var borraFruta = fruta.shift("mandarina"); //quita el elemento en la primera posición del array
var posicion = fruta.indexof("naranja"); //buscar el index o en que posición se encuentra un elemento del array