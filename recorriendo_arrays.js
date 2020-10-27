// Array de objetos

var articulos = [
    {nombre: "Bici", costo: 5000},
    {nombre: "teclado", costo: 50},
    {nombre: "audifonos", costo: 100},
    {nombre: "pantalla", costo: 11000},
    {nombre: "mp3", costo: 10},
    {nombre: "sanduchera", costo: 20},
    {nombre: "horno", costo: 500},
    {nombre: "Tv", costo: 15000}
];


// Método de recorrido de array FILTER:
//(no se modifica el array original de los objetos, ingresa los atributos filtrados dentro de un nuevo array)

var articulosFiltrados = articulos.filter (function(articulo){ 
    return articulo.costo <= 50         // me debe traer todos los articulos que sean menor o igual a 50                                                                                             
});

//se llama un nueva variable que almacene el array de filter
//será igual al array_origial.filter
//dentro debe ir una función que retorne el atributo a filtrar
//la función llevará como atributo una variable x pero se usa para retornar el atributo a filtrar

//--------------******-------------*****--------------*******---------------******------------//

// Método de recorrido de array MAP:

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre          //me trae todos los nombres en forma de string de todos los artículos
});

//--------------******-------------*****--------------*******---------------******------------//

// Método de recorrido de array FIND:
//Valida por medio de true o false
//Si el articulo que buscamos existe lo retorna.


var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === "teclado"
});

//--------------******-------------*****--------------*******---------------******------------//

// Método de recorrido de array FOREACH:
//NO GENERA UN NUEVO ARRAY

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//--------------******-------------*****--------------*******---------------******------------//

// Método de recorrido de array SOME:
//valida verdadero o falso, si existe retorna verdadero, sino falso.
   
var articulosBaratos = articulos.some(function(articulo){
        return articulo.costo <= 1000;
    });