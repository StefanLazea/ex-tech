// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

// Configure chai
chai.use(chaiHttp);
chai.use(require('chai-json-schema'));
chai.should();

let schema = {
    title: 'Company schema',
    type: 'object',
    required: ['name', 'taxCode', 'ipoStatus', 'fundingRounds'],
    properties: {
        bane: {
            type: 'string'
        },
        taxCode: {
            type: 'number'
        },
        fundingRounds: {
            type: 'array',
            minItems: 2,
            items: {
                type: 'object',
                required: ['title', 'moneyRaised', 'numberOfInvestors', 'currency'],
                properties: {
                    title: {
                        type: 'string'
                    },
                    moneyRaised: {
                        type: 'number'
                    },
                    numberOfInvestors: {
                        type: 'number'
                    },
                    currency: {
                        type: 'string',
                        minLength: 3,
                        maxLength: 3
                    }
                }
            }
        }, 
        ipoStatus: {
            type: 'boolean'
        }
    }
}

describe("JSON", () => {
    describe("GET /company.json", () => {
        it('should return a valid json', (done) => {
            chai.request(app)
                 .get('/company.json')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     chai.assert.jsonSchema(res.body, schema)
                     done();
                  });
        })
    })
});