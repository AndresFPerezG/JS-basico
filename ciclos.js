// Loop for


var estudiantes = ["carlos", "Andres", "Rosa", "Daniel"];

function saludarEstudiantes (estudiante){
    console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++){ //estudiantes.length determina el # de estudiantes del array (4) 
    saludarEstudiantes(estudiantes[i]);       //mientras [i] sea menor que 4 va saludar a cada estudiante
}

for (var estudiante of estudiantes){ //segunda forma de Loop For (For of). Siempre inicializamos una variable en singular de un arregla en plural
    saludarEstudiantes(estudiante);
}


//Loop while

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
