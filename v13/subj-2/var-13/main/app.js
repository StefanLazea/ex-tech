const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json())

app.locals.cars = [{
    brand : 'Ferrari',
    make : 'Testarosa',
    year : 1984
},{
    brand : 'Ferrari',
    make : '250 GT California',
    year : 1957
}]

app.get('/cars', async (req, res) => {
   // TODO
})

app.post('/cars', async (req, res) => {
    // TODO
})

module.exports = app