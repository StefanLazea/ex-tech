// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

// Configure chai
chai.use(chaiHttp);
chai.use(require('chai-json-schema'));
chai.should();

let schema = {
    title: 'Playlist schema',
    type: 'object',
    required: ['playlistName', 'tags', 'songs', 'private'],
    properties: {
        playlistName: {
            type: 'string'
        },
        tags: {
            type: 'array',
            items: {
                type: 'string'
            },
            minItems: 3
        },
        songs: {
            type: 'array',
            minItems: 2,
            items: {
                type: 'object',
                required: ['title', 'artist', 'duration'],
                properties: {
                    title: {
                        type: 'string'
                    },
                    artist: {
                        type: 'string'
                    },
                    duration: {
                        type: 'number'
                    }
                }
            }
        }, 
        private: {
            type: 'boolean'
        }
    }
}

describe("JSON", () => {
    describe("GET /playlist.json", () => {
        it('should return a valid json', (done) => {
            chai.request(app)
                 .get('/playlist.json')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     chai.assert.jsonSchema(res.body, schema)
                     done();
                  });
        })
    })
});