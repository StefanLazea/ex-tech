// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

// Configure chai
chai.use(chaiHttp);
chai.use(require('chai-json-schema'));
chai.should();

let schema = {
    title: 'Invoice schema',
    type: 'object',
    required: ['invoiceNumber', 'invoiceSeries', 'invoiceItems'],
    properties: {
        invoiceNumber: {
            type: 'number'
        },
        invoiceSeries: {
            type: 'string'
        },
        invoiceItems: {
            type: 'array',
            minItems: 1,
            items: {
                type: 'object',
                required: ['productName', 'quantity', 'productPrice']
            }
        }

    }
}

describe("JSON", () => {
    describe("GET /invoice.json", () => {
        it('should return a valid json', (done) => {
            chai.request(app)
                 .get('/invoice.json')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     chai.assert.jsonSchema(res.body, schema)
                     done();
                  });
        })
    })
});