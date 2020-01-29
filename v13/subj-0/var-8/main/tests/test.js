// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

// Configure chai
chai.use(chaiHttp);
chai.use(require('chai-json-schema'));
chai.should();

let schema = {
    title: 'Movie schema',
    type: 'object',
    required: ['title', 'tags', 'rating', 'duration', 'cast', 'animated'],
    properties: {
        title: {
            type: 'string'
        },
        tags: {
            type: 'array',
            items: {
                type: 'string'
            },
            minItems: 3
        },
        cast: {
            type: 'array',
            minItems: 2,
            items: {
                type: 'object',
                required: ['name', 'age', 'characterName'],
                properties: {
                    name: {
                        type: 'string'
                    },
                    age: {
                        type: 'number'
                    },
                    characterName: {
                        type: 'string'
                    }
                }
            }
        }, 
        animated: {
            type: 'boolean'
        }
    }
}

describe("JSON", () => {
    describe("GET /movie.json", () => {
        it('should return a valid json', (done) => {
            chai.request(app)
                 .get('/movie.json')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     chai.assert.jsonSchema(res.body, schema)
                     done();
                  });
        })
    })
});