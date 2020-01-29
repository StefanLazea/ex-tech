const app = require('./../app');

const products = [
    {
        name: "Iphone XS",
        price: 5000
    }
]

describe('Test applyBlackFriday function', () => {
    test('Function should return a Promise', (done) => {
        expect(app.applyBlackFriday(products, 5)).toBeInstanceOf(Promise);
        done();
    });
    test('Function should throw an Error if discount is not a number', (done) => {
         app.applyBlackFriday(products, "discount").catch(err => {
             expect(err).toBeInstanceOf(Error);
             done();
         })
    })
    test('Discount should be greater than 0 and less equal than 10%', (done) => {
        app.applyBlackFriday(products, 11).catch(err => {
            expect(err).toBeInstanceOf(Error);
            done();
        })
    })
    test('products should contain elements in the following format {name: string, price: number}', (done) => {
        app.applyBlackFriday([{name: 5, price: "haha"}], 5).catch(err => {
            expect(err).toBeInstanceOf(Error);
            done();
        })
    })
    test('Function should return the expected values', (done) => {
        app.applyBlackFriday(products, 10).then(res => {
            expect(res[0].price).toBe(4500);
            done();
        })
    })
});