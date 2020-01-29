const app = require('./../app');

const vehicles = [
    {
        make: "Audi A5",
        price: 15000,
    },
    {
        make: "BMW X6",
        price: 30000,
    }
];

const invalidVehicles = [
    {
        make: "Audi A5",
        price: 15000,
    },
    {
        make: "BMW X6",
        price: 30000,
    },
    {
        make: 5,
        price: "MEH",
    }
]

describe('Testing applyDiscount function', () => {
    test('Test if the function returns a Promise', (done) => {
        expect(app.applyDiscount(vehicles, 2000)).toBeInstanceOf(Promise);
        done();
    });

    test('Function should reject an Error with the message "Invalid discount" if discount parameter is not a number', (done) =>{
        app.applyDiscount(vehicles, 'Invalid').catch(err => {
            expect(err).toBeInstanceOf(Error);
            done();
        });
    });

    test('Function should reject an Error with the message "Invalid array format" if array is not in the specified format', (done) =>{
        app.applyDiscount(invalidVehicles, 2000).catch(err => {
            expect(err).toBeInstanceOf(Error);
            done();
        });
    });

    test('Function should reject a message: "Discount is too big" if the value is higher than 50% of the lowest price', (done) => {
        app.applyDiscount(vehicles, 7600).catch(err => {
           expect(err).toMatch('Discount too big');
           done(); 
        });
    });

    test('Function should return the expected values', (done) => {
        app.applyDiscount(vehicles, 7500).then(res => {
            expect(res[1].price).toBe(22500);
            done();
        })
    })
});