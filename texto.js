const fs = require('fs');

//Imprime en TXT

fs.writeFile('pelisData1.txt', 'Nombres de Peliculas', (error) => {

    if (error) {
        console.log('Error: ${error}');
    }
});

fs.appendFile('pelisData1.txt', '\n El Castillo Vagabundo', (error) => {
    if (!error) {
        console.log("¡Contenido Agragado!");
    } else {
        console.log('Error: ${error}');
    }
});



