const app = require('./../app')


describe('Testing getAverageGrade function', () => {

    test('Function throws an Error if a grade is negative', (done) => {
        try{
            app.getAverageGrade([{name : 'a', grade : 4},{name : 'b', grade : 8},{name : 'c', grade : -4},{name : 'd', grade : 2}])
        }
        catch(err){
            expect(err).toBeInstanceOf(Error)
            done()
        }
    })

    test('Function throws an Error with the message "Invalid grade" if a grade is neither a positive number nor "A"', (done) => {
        try{
            app.getAverageGrade([{name : 'a', grade : 4},{name : 'b', grade : 8},{name : 'c', grade : 10},{name : 'd', grade : "b"}])
        }
        catch(err){
            expect(err).toBeInstanceOf(Error)
            expect(err.message).toBe('Invalid grade')
            done()
        }
    })

    test('Function throws an Error with the message "Invalid grade" if a grade is undefined', (done) => {
        try{
            app.getAverageGrade([{name : 'a', grade : 4},{name : 'b', grade : 8},{name : 'c', grade : 10},{name : 'd'}])
        }
        catch(err){
            expect(err).toBeInstanceOf(Error)
            expect(err.message).toBe('Invalid grade')
            done()
        }
    })

    test('Function returns 7', (done) =>{
        let result =  app.getAverageGrade([{name : 'a', grade : 4},{name : 'b', grade : 8},{name : 'c', grade : 9},{name : 'd', grade : "A"}])
        expect(result).toBe(7)
        done()
    })

    test('Function returns 0 for an empty list of grades', (done) =>{
        let result =  app.getAverageGrade([])
        expect(result).toBe(0)
        done()
    })

})