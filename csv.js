var fs = require('fs');

var pelis = require('csv-stringify');
var someData =[
    {
        "Peliculas": "El Castillo Vagabundo",
        " Director": " Hayao Miyazaki"
    },
    {
        "Peliculas": "El Castillo en el Cielo",
        " Director": " Hayao Miyazakih"
    },
    {
        "Peliculas": "El Viaje de Chihiro",
        " Director": " Hayao Miyazaki"
    },
    {
        "Peliculas": "El Regreso del gato",
        " Director": " Hiroyuki Morita"
    },
    {
        "Peliculas": "Nausicaä del Valle del Viento",
        " Director": " Hayao Miyazaki"
    }
]

pelis.stringify(someData, {
    header: true
}, function(err, output){
    fs.writeFileSync('./pelisData2.csv', output);
})

