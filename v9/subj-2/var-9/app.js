const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.cars = [
    {
        make: "BMW",
        model: "X6",
        price: 50000
    },
    {
        make: "Lamborghini",
        model: "Huracan",
        price: 200000
    },
];

app.get('/cars', (req, res) => {
    res.status(200).json(app.locals.cars);
});

app.post('/cars', (req, res, next) => {
    res.status(400).json({message: 'Bad request'});
})

module.exports = app;