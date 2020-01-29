const app = require('./../app')


describe('Testing toCamelCase function', () => {

    test('Function should throw an error if input is number. Error text should be "Input must be a string primitive or a string object"', (done) => {
        try{
            app.toCamelCase(4)
        }
        catch(err){
            expect(err).toBeInstanceOf(Error)
            expect(err.message).toBe('Input must be a string primitive or a string object')
            done()
        }
    })
    
    test('Function should throw an error if input is undefined. "Input must be a string primitive or a string object"', (done) => {
        try{
            app.toCamelCase()
        }
        catch(err){
            expect(err).toBeInstanceOf(Error)
            expect(err.message).toBe('Input must be a string primitive or a string object')
            done()
        }
    })

     test('Function should return aSmallCat', (done) => {
        let result = app.toCamelCase('a-small-cat')
        expect(result).toBe('aSmallCat')
        done()
    })
    
    test('Function should return aSmallCat', (done) => {
        let result = app.toCamelCase(new String('a_small_cat'))
        expect(result).toBe('aSmallCat')
        done()
    })

    test('Function should return aSmallCat', (done) => {
        let result = app.toCamelCase(new String('a small cat'))
        expect(result).toBe('aSmallCat')
        done()
    })
})