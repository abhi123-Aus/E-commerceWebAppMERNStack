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


// test to create a new diary-
describe('/POST diary', () => {
    it('It should POST a diary from a user with admin access to the database', (done) => {
      
      chai.request(app)
          .post('api/product/create/5ed2b1fa069cdf42fbb35fb4')
          .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4NjY0Njl9.l_4qoaA0JUm3b5gvhTddJ8i5_8YduSSLBpltOSTQG9s')
          .type('form')
          .send({
            "name": "TestDiaryFromMocha",
            "description": "Test Diary From Mocha",
            "price": "40",
            "category": "5ec10c3b29aa082bfe7d0c26",
            "shipping": "false",
            "quantity": "50"
          })
            .end((err, res) => { 
                
            done();
          });
    }); 
});

// test to update an existing diary-
describe('/PUT diary', () => {
    it('It should PUT a diary update from a user with admin access to the database', (done) => {
      
      chai.request(app)
          .post('api/product/5ec10e8dad507d2cac74daa8/5ec10e8dad507d2cac74daa8')
          .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4NjY0Njl9.l_4qoaA0JUm3b5gvhTddJ8i5_8YduSSLBpltOSTQG9s')
          .type('form')
          .send({
            "name": "TestDiaryFromMocha",
            "description": "Test Diary From Mocha",
            "price": "40",
            "category": "5ec10c3b29aa082bfe7d0c26",
            "shipping": "false",
            "quantity": "50"
          })
            .end((err, res) => { 
                
            done();
          });
    }); 
});

// test to get a particular diary with productId
describe('/GET diary', () => {
    it('It should return a diary with the corresponding productId', (done) => {
      
      chai.request(app)
          .get('/api/product/5ec10e8dad507d2cac74daa8')
          .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4NjY0Njl9.l_4qoaA0JUm3b5gvhTddJ8i5_8YduSSLBpltOSTQG9s')
          .end((err, res) => {
                res.should.have.status(200);          
            done();
          });
    });
  
});

// test to get a list of all diaries
describe('/GET diaries', () => {
    it('It should return list of all diary', (done) => {
      
      chai.request(app)
          .get('/api/products')
          .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4NjY0Njl9.l_4qoaA0JUm3b5gvhTddJ8i5_8YduSSLBpltOSTQG9s')
          .end((err, res) => {
                res.should.have.status(200);          
            done();
          });
    });
  
});

// test to delete a diary without admin access
describe('/DELETE diary', () => {
    it('It should NOT delete a diary with the corresponding productId without admin access', (done) => {
      
      chai.request(app)
          .delete('/api/product/5ec10e8dad507d2cac74daa8/5ec10e8dad507d2cac74daa8')
          .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyZDVmNWVlOThkZjRhMGM3ZTQ5ZWUiLCJpYXQiOjE1OTA4NzU2NTZ9.yx8xcXRb4_L20-jN3dkbAhClx8WbIcSXwf_XfkLujWI')
          .end((err, res) => {
                res.should.have.status(400);          
            done();
          });
    });
  
  });


// test to search a diary-
describe('/POST search diary', () => {
  it('It should POST a diary search from a user', (done) => {
    
    chai.request(app)
        .post('api/products/by/search')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4NjY0Njl9.l_4qoaA0JUm3b5gvhTddJ8i5_8YduSSLBpltOSTQG9s')
        .end((err, res) => { 
        done();
        });
  }); 
});
