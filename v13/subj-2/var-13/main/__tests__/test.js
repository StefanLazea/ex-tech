const request = require('supertest')
const app = require('./../app')

describe('Test GET /cars', () => {
  
    test('The car list can be filtered', (done) => {
        request(app).get('/cars?filter=GT').send().expect(200)
            .then(res => {
                let response = JSON.parse(res.text)
                expect(response).toHaveLength(1)
                done()
            })
    })
})

describe('Test post /cars', () => {
  
    test('If request body is not sent server should respond with status code 400 and {"message": "body is missing"}', (done) => {
        request(app).post('/cars')
            .send()
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('body is missing')
                done()
            })
    })

    test('If request body is present but did not follow the specified format, server should respond with status code 400 and {"message": "malformed request"}', (done) => {
        request(app).post('/cars')
            .send({brand : 'x', make : 'x1'})
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('malformed request')
                done()
            })
    })


    test('Year should not be too low', (done) => {
        request(app).post('/cars').send({brand : 'x', make : 'x1', year : 1400}).expect(400).then(res => {
            expect(JSON.parse(res.text).message).toBe('year should be > 1860')
            done()
        })
    })

    test('A car can be added and car list is valid', (done) => {
        request(app).post('/cars').send({brand : 'x', make : 'x1', year : 1900}).expect(201).then(res => {
            expect(JSON.parse(res.text).message).toBe('created')
            return request(app).get('/cars').send().expect(200)
        }).then(res => {
                let response = JSON.parse(res.text)
                let sample = {brand : 'x', make : 'x1', year : 1900}
                expect(response).toHaveLength(3)
                expect(response).toContainEqual(sample)
                done()
            })
    })

})



