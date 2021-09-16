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


// test to get a category of diary with categoryId
describe('/GET category', () => {
    it('It should return the category of diary with the corresponding categoryId', (done) => {
      
      chai.request(app)
          .get('/api/category/5ec10c3b29aa082bfe7d0c26')
          .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4Nzc1NDB9.AoRXkseD7TUxh9cyTxFlTQUOC-9jqlijtFm4xK5MStg')
          .end((err, res) => {
                res.should.have.status(200);      
            done();
          });
    });
  
});


// test to create a new category for diary with admin access-
describe('/POST category', () => {
    it('It should POST a category from a user with admin access to the database', (done) => {
      
      chai.request(app)
          .post('category/create/5ed2b1fa069cdf42fbb35fb4')
          .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4NjY0Njl9.l_4qoaA0JUm3b5gvhTddJ8i5_8YduSSLBpltOSTQG9s')
          .type('form')
          .send({
            "name": "Cover:Test-Font:Test"
          })
            .end((err, res) => { 
                
            done();
          });
    }); 
});

// PBI- 12
// test to get colour of diaries
describe('/GET diary colour', () => {
  it('It should return the colour of a diary', (done) => {
    
    chai.request(app)
        .get('/api/category/5ec10c5a29aa082bfe7d0c27')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4NjY0Njl9.l_4qoaA0JUm3b5gvhTddJ8i5_8YduSSLBpltOSTQG9s')
        .end((err, res) => {
              res.should.have.status(200);          
          done();
        });
  });

});

// PBI- 13
// test to get type of paper of a diary
describe('/GET diary colour', () => {
  it('It should return the type of paper of a diary', (done) => {
    
    chai.request(app)
        .get('/api/category/5ec10c6c29aa082bfe7d0c28')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4NjY0Njl9.l_4qoaA0JUm3b5gvhTddJ8i5_8YduSSLBpltOSTQG9s')
        .end((err, res) => {
              res.should.have.status(200);          
          done();
        });
  });

});


// test to update an existing category for diary with admin access-
describe('/PUT category', () => {
    it('It should PUT a category update from a user with admin access to the database', (done) => {
      
      chai.request(app)
          .post('category/create/5ed2b1fa069cdf42fbb35fb4')
          .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4NjY0Njl9.l_4qoaA0JUm3b5gvhTddJ8i5_8YduSSLBpltOSTQG9s')
          .type('form')
          .send({
            "name": "Cover:TestUpdate-Font:TestUpdate"
          })
            .end((err, res) => { 
                
            done();
          });
    }); 
});


// test to delete a category without admin access
describe('/DELETE category', () => {
    it('It should NOT delete a category with the corresponding categoryId without admin access', (done) => {
      
      chai.request(app)
          .delete('/api/product/5ec10c3b29aa082bfe7d0c26/5ec10e8dad507d2cac74daa8')
          .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyZDVmNWVlOThkZjRhMGM3ZTQ5ZWUiLCJpYXQiOjE1OTA4NzU2NTZ9.yx8xcXRb4_L20-jN3dkbAhClx8WbIcSXwf_XfkLujWI')
          .end((err, res) => {
                res.should.have.status(400);          
            done();
          });
    });
  
  });


// test to get a list of all categories
describe('/GET categories', () => {
    it('It should return list of all categories', (done) => {
      
      chai.request(app)
          .get('/api/categories')
          .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4NjY0Njl9.l_4qoaA0JUm3b5gvhTddJ8i5_8YduSSLBpltOSTQG9s')
          .end((err, res) => {
                res.should.have.status(200);          
            done();
          });
    });
  
});