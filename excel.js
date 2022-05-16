var fs = require('fs');
var xlsx = require("xlsx");

console.log("");

    fs.readFile('./listaPeliculas.xlsx', 'utf-8', (err, data) => {
        if(err) {
            console.log('error',err);
        }else{
            console.log(data);
        }
    });

    