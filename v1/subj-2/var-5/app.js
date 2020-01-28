const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.products = [
    {
        name: "Iphone XS",
        category: "Smartphone",
        price: 5000
    },
    {
        name: "Samsung Galaxy S10",
        category: "Smartphone",
        price: 3000
    },
    {
        name: "Huawei Mate 20 Pro",
        category: "Smartphone",
        price: 3500
    }
];

app.get('/products', (req, res) => {
    res.status(200).json(app.locals.products);
});

app.post('/products', (req, res, next) => {
    if(Object.keys(req.body).length === 0){
        return res.status(500).send({message: "Body is missing"});
    }
    if(typeof req.body.name === 'undefined' 
        || typeof req.body.category === 'undefined'
        || typeof req.body.price === 'undefined'
    ){
        return res.status(500).send({message: "Invalid body format"});
    }else{
        if(req.body.price < 0){
            return res.status(500).send({message: "Price should be a positive number"});
        }else{
            let product = {
                name: req.body.name,
                category: req.body.category,
                price: req.body.price
            };
            
            if(app.locals.products.some(el=>
                el.name === product.name && el.category === product.category && el.price === product.price)){
                return res.status(500).send({message: "Product already exists"});
            }else{
                app.locals.products.push(product);
                return res.status(201).send({message: "Created"});
            }
        }
            
    }


    
})

module.exports = app;