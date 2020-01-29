const request = require('supertest');
const app = require('./../app');

describe('TEST API POST Method', () => {
    test('If request body is not sent server should respond with status code 500 and {"message": "Body is missing"}', (done) => {
        request(app).post('/cars').
        send({}).
        expect(500).
        then(res => {
            expect(JSON.parse(res.text).message).toBe('Body is missing');
            done();
        })
    })

    test('If request body is present but not respected the specified format server should respond with status code 500 and {"message": "Invlaid body format"}', (done) => {
        request(app).post('/cars').
            send({something: "else"}).
            expect(500).
            then(res => {
                expect(JSON.parse(res.text).message).toBe('Invalid body format');
                done();
            })
    })

    test('Car price should not be negative', (done) => {
        request(app).post('/cars').send({
            make: "Audi",
            model: "A5",
            price: -400
        }).expect(500).then(res => {
            expect(JSON.parse(res.text).message).toBe('Price should be a positive number');
            done();
        })
    })

    test('If the sent car already exists send status code 500 with body {"message": "Car already exists"}. Checking is done by model', (done) => {
        request(app).post('/products').
            send({
                make: "BMW",
                model: "X6",
                price: 50000
            }).expect(500).then(res => {
                expect(JSON.parse(res.text).message).toBe('Car already exists');
                done();
            })
    })

    test('If the body is valid the car should be added to the array', (done) => {
        request(app).post('/products').send({
            make: "BMW",
            model: "X5",
            price: 40000
        }).expect(201).then(res => {
            expect(JSON.parse(res.text).message).toBe('Created');
            expect(app.locals.cars.length).toBe(4);
            done();
        })
    })
});