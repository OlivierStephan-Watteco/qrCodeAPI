const app = require('../index');
var should = require('should');

const request = require('supertest');

var data = require('../sensor.json');
const { expect } = require('chai');
console.log(data);
describe('Check if the API is responding', () => {
    describe('GET /', () => {
     it('should get 200', (done) => {
      request(app).get('/').expect(200, done).expect((res) => {
        res.text.should.containEql('Welcome');
      });
     });
    });
});

describe('Check each device', () => {
    
        Object.keys(data).forEach(function (device){
            describe('GET /'+device, () => {
                it('should get 200', (done) => {
                    request(app).get('/'+device).expect(200, done).expect((res) => {
                        expect(JSON.parse(res.text)).to.be.eql(data[device]);
                    });
                });
            });
        });
});

   