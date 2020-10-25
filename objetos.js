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

