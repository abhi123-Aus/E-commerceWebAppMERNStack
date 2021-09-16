var supertest = require('supertest');
var chai = require('chai');
var uuid = require('uuid');
var app = require('../app.js');

let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

global.app = app;
global.uuid = uuid;
global.expect = chai.expect;
global.request = supertest(app);


// test to get a braintree token for a user
describe('/GET braintree token', () => {
    it('It should return a braintree token for the user', (done) => {
      
      chai.request(app)
          .get('/api/braintree/getToken/5ed2b1fa069cdf42fbb35fb4')
          .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4Nzc1NDB9.AoRXkseD7TUxh9cyTxFlTQUOC-9jqlijtFm4xK5MStg')
          .end((err, res) => {
                res.should.have.status(200);      
            done();
          });
    });
  
});

// test to POST braintree payment process
describe('/POST braintree', () => {
    it('It should POST braintree token for a user to process transaction of card on Braintree console', (done) => {
      
      chai.request(app)
          .post('/braintree/payment/5ed2b1fa069cdf42fbb35fb4')
          .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4NjY0Njl9.l_4qoaA0JUm3b5gvhTddJ8i5_8YduSSLBpltOSTQG9s')
          .type('form')
          .send({
            "amount": "50",
            "paymentMethodNonce": "card"
          })
            .end((err, res) => {           
            done();
          });
    }); 
});

// test to POST braintree token to PayPal console for payment process with valid user token
describe('/POST braintree', () => {
  it('It should POST braintree token for a user to process transaction of card on PayPal Sandbox console', (done) => {
    
    chai.request(app)
        .post('/braintree/payment/5ed2b1fa069cdf42fbb35fb4')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4NjY0Njl9.l_4qoaA0JUm3b5gvhTddJ8i5_8YduSSLBpltOSTQG9s')
        .type('form')
        .send({
          "amount": "50",
          "paymentMethodNonce": "paypal"
        })
          .end((err, res) => { 
          done();
        });
  }); 
});


// test to POST braintree payment process with invalid user token
describe('/POST braintree', () => {
  it('It should NOT POST braintree token for a user with invalid user-token', (done) => {
    
    chai.request(app)
        .post('/braintree/payment/5ed2b1fa069cdf42fbb35fb4')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4NjY0Njl9.l_4qoaA0JUm3b5gvhTddJ8i5_8YduSSLBpltOSTQG9s')
        .type('form')
        .send({
          "amount": "50",
          "paymentMethodNonce": "card"
        })
          .end((err, res) => { 
          done();
        });
  }); 
});


// test to POST braintree payment process with null amount
describe('/POST braintree', () => {
  it('It should NOT POST braintree token for a user with null amount', (done) => {
    
    chai.request(app)
        .post('/braintree/payment/5ed2b1fa069cdf42fbb35fb4')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4NjY0Njl9.l_4qoaA0JUm3b5gvhTddJ8i5_8YduSSLBpltOSTQG9s')
        .type('form')
        .send({
          "amount": "",
          "paymentMethodNonce": "card"
        })
          .end((err, res) => {     
          done();
        });
  }); 
});

