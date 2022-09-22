const express = require('express');

const app = express();

app.get('/app/:math', (req, res) => {
    const {value1, value2} = req.query;
    const {math} = req.params;

    if (math === 'add') {
        const sum = Number(value1) + Number(value2);
        res.send(`Wynik dodawania to ${sum}`)
    }

    if (math === 'subtract') {
        const sum = Number(value1) - Number(value2);
        res.send(`Wynik odejmowania to ${sum}`)
    }

    if (math === 'multiply') {
        const sum = Number(value1) * Number(value2);
        res.send(`Wynik mnożenia to ${sum}`)
    }

});



app.listen(3000, 'localhost');