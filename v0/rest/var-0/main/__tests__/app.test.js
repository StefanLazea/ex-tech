const request = require('supertest')
const app = require('./../app')

beforeAll((done) => {
    request(app).get('/create').send()
        .then(() => {
            done()
        })
})

describe('Test post /ships', () => {
  
    test('If request body is not sent server should respond with status code 400 and {"message": "body is missing"}', (done) => {
        request(app).post('/ships')
            .send()
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('body is missing')
                done()
            })
    })

    test('If request body is present but did not follow the specified format, server should respond with status code 400 and {"message": "malformed request"}', (done) => {
        request(app).post('/ships')
            .send({name : 'x', speed : 22})
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('malformed request')
                done()
            })
    })


    test('Displacement should be over 1000 tonnes', (done) => {
        request(app).post('/ships').send({
            name: "test ship",
            portOfSail: "Thessaloniki",
            displacement: 400
        }).expect(400).then(res => {
            expect(JSON.parse(res.text).message).toBe('displacement should be over 1000')
            done()
        })
    })

    test('A ship can be added', (done) => {
        request(app).post('/ships').send({
            name: "aaa",
            portOfSail: "Constanta",
            displacement : 10000
        }).expect(201).then(res => {
            expect(JSON.parse(res.text).message).toBe('created')
            done()
        })
    })

    test('The ship list is valid', (done) => {
        request(app).get('/ships').send().expect(200)
            .then(res => {
                let response = JSON.parse(res.text)
                let sample = {
                    id:11,
                    name: "aaa",
                    portOfSail: "Constanta",
                    displacement : 10000
                }
                expect(response).toHaveLength(11)
                expect(response).toContainEqual(sample)
                done()
            })
    })
})



