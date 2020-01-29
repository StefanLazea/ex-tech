const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.students = [{
        name: "Gigel",
        surname: "Popel",
        age: 23
    },
    {
        name: "Gigescu",
        surname: "Ionel",
        age: 25
    }
];

app.get('/students', (req, res) => {
    res.status(200).json(app.locals.products);
});

app.post('/students', (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(500).send({ message: "Body is missing" });
    }
    if (typeof req.body.name !== "undefined" ||
        typeof req.body.surname !== "undefined" ||
        typeof req.body.age !== "undefined") {

        let age = req.body.age;
        let name = req.body.name;
        let surname = req.body.surname;

        if (age > 0) {
            if (app.locals.students.some(el => el.name === name)) {
                return res.status(500).send({ message: "Student already exists" });
            }
            else {
                const stud = {
                    name: name,
                    surname: surname,
                    age: age
                }
                app.locals.students.push(stud);
                return res.status(201).send({ message: "Created" });
            }

        }
        else {
            return res.status(500).send({ message: "Age should be a positive number" });
        }
    }
    else {
        return res.status(500).send({ message: "Invalid body format" });

    }



})

module.exports = app;
