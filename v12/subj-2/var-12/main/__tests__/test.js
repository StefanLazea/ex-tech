const request = require('supertest')
const app = require('./../app')

beforeAll((done) => {
    request(app).get('/create').send()
        .then(() => {
            done()
        })
})

describe('Test GET /students', () => {
  
    test('The student list is complete', (done) => {
        request(app).get('/students').send().expect(200)
            .then(res => {
                let response = JSON.parse(res.text)
                expect(response).toHaveLength(10)
                done()
            })
    })
    test('The student list can be filtered', (done) => {
        request(app).get('/students?filter=name 5').send().expect(200)
            .then(res => {
                let response = JSON.parse(res.text)
                expect(response).toHaveLength(1)
                done()
            })
    })
})


describe('Test DELETE /students/:id', () => {
  
    test('A non existent student cannot be deleted', (done) => {
        request(app).delete('/students/13').send().expect(404).then(res => {
            expect(JSON.parse(res.text).message).toBe('not found')
            done()
        })
    })

    test('A student can be deleted', (done) => {
        request(app).delete('/students/3').send().expect(202).then(res => {
            expect(JSON.parse(res.text).message).toBe('accepted')
            done()
        })
    })

    test('The student list is valid', (done) => {
        request(app).get('/students').send().expect(200)
            .then(res => {
                let response = JSON.parse(res.text)
                let sample = {
                    id:3,
                    name: "aaa",
                    address: "nowhere",
                    age: 24
                }
                expect(response).toHaveLength(9)
                expect(response).not.toContainEqual(sample)
                done()
            })
    })
})




