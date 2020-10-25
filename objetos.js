//Objetos

var objeto = {}; // esto es un objeto


var mi_auto = { // Objeto con sus atributos
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalle_del_auto: function(){ //Método de un objeto, agregamos una función dentro del objeto
        console.log(`Auto ${this.modelo} ${this.annio}`); //this es una variable que hace referencia al objeto padre (mi_auto)
    }
};

mi_auto.marca //se llama el atributo con el nombre.atributo

mi_auto.detalle_del_auto(); //se manda a llamar con el punto ( objeto.function(); ) y como si fuera una función( function(); )


//--------------*********-------------------//--------------****************----------------//

//Función constructora de objetos (cuando se tienen varios objetos de la misma clase)

function auto(marca, modelo, annio){
    this.marca = marca; 
    this.modelo = modelo;
    this.annio = annio;
}

var auto_nuevo = new auto("Tesla", "Model 3", 2020); //nueva instancia del objeto auto (función contructora)

var auto_nuevo2 = new auto("Mazda", "3", 2019); //nueva instancia del objeto auto

var auto_nuevo3 = new auto("Chevrolet", "camaro", 2018); //nueva instancia del objeto auto

//Crear un método que permita hacer un listado de carros más automático

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }


  //Otro ejemplo

  //Función constructora:
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


//new genera una instancia, una instacia es generar un objeto que proviene de un objeto:
var numero = prompt("How many cars?")
var autos = []; //array
for(var i = 0; i < numero; i++){

    var marca = prompt("brand?");
    var modelo = prompt("model?");
    var annio = prompt("year?");
    autos.push(new auto(marca, modelo, annio));
}

for(var i = 0; i < autos.length; i++) {
    console.log(autos[i])
}


