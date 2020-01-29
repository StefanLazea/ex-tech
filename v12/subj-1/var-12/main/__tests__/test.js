const app = require('./../app')

describe('Testing classes extending Shape', () => {
    test('Test if calling area on a shape throws an exception with the message "not implemented"', (done) => {
        let shape =  new app.Shape({})
        try{
            shape.area()
        }
        catch(err){
            expect(err).toBeInstanceOf(Error)
            expect(err.message).toBe('not implemented')
            done()
        }
    })

    test('Test if a Square can be correctly created with width 5', (done) => {
        let shape =  new app.Square({width : 5})
        expect(shape.dimensions.width).toBe(5)
        done()
    })


    test('Test if calling area on a Square returns 16', (done) => {
        let shape =  new app.Square({width : 4})
        let result =  shape.area()
        expect(result).toBe(16)
        done()
    })

    test('Test if calling area on a Circle returns approximately 50', (done) => {
        let shape =  new app.Circle({radius : 4})
        let result =  shape.area()
        expect(parseInt(result)).toBe(50)
        done()
    })

    test('Test if calling area on a Rectangle returns 12', (done) => {
        let shape =  new app.Rectangle({width : 4, height : 3})
        let result =  shape.area()
        expect(result).toBe(12)
        done()
    })

})