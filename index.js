const express = require('express');


const PORT = 3000;

const app = express();

console.log("Iniciando aplicación");

app.get('/', (req, res) => {
    console.log('Peticion recibida');
    res.send('Bienvenid@ a mi primera aplicación de Node');
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
