// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

// Configure chai
chai.use(chaiHttp);
chai.use(require('chai-json-schema'));
chai.should();

let schema = {
    title: 'Project schema',
    type: 'object',
    required: ['projectName', 'budget', 'budgetCurrency', 'teamMembers', 'isCompleted'],
    properties: {
        projectName: {
            type: 'string'
        },
        budget: {
            type: 'number'
        },
        budgetCurrency: {
            type: 'string',
            minLength: 3,
            maxLength: 3
        },
        teamMembers: {
            type: 'array',
            minItems: 2,
            items: {
                type: 'object',
                required: ['name', 'role', 'hourlyRate'],
                properties: {
                    name: {
                        type: 'string'
                    },
                    role: {
                        type: 'string'
                    },
                    hourlyRate: {
                        type: 'number'
                    }
                }
            }
        }, 
        isCompleted: {
            type: 'boolean'
        }
    }
}

describe("JSON", () => {
    describe("GET /project.json", () => {
        it('should return a valid json', (done) => {
            chai.request(app)
                 .get('/project.json')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     chai.assert.jsonSchema(res.body, schema)
                     done();
                  });
        })
    })
});