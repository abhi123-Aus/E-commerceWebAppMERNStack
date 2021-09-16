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


// test to signup a new user-- Delete the user before testing and change status code
describe('/POST signup', () => {
    it('It should POST a user to signup successfully', (done) => {
      
      chai.request(app)
          .post('/api/signup')
          .send({
            "name": "TestUserFromMocha",
            "email": "mocha@unbox.com",
            "password": "123456"
          })
            .end((err, res) => {
                res.should.have.status(400);
            done();
          });
    }); 
});

// test to signup with existing email id
describe('/POST signup', () => {
    it('It should NOT POST a user to signup with existing email id', (done) => {
      
      chai.request(app)
          .post('/api/signup')
          .send({
            "name": "Jigar",
            "email": "jigar@unbox.com",
            "password": "123456"
          })
            .end((err, res) => {
                res.should.have.status(400);
            done();
          });
    }); 
});

// test to signup without email id
describe('/POST signup', () => {
    it('It should NOT POST a user to signup without an email id', (done) => {
      
      chai.request(app)
          .post('/api/signup')
          .send({
            "name": "Jigar",
            "email": "",
            "password": "123456"
          })
            .end((err, res) => {
                res.should.have.status(400);
            done();
          });
    }); 
});

// test to signup without name
describe('/POST signup', () => {
    it('It should NOT POST a user to signup without a name', (done) => {
      
      chai.request(app)
          .post('/api/signup')
          .send({
            "name": "",
            "email": "jigar@unbox.com",
            "password": "123456"
          })
            .end((err, res) => {
                res.should.have.status(400);
            done();
          });
    }); 
});

// test to signup without password
describe('/POST signup', () => {
    it('It should NOT POST a user to signup without a password', (done) => {
      
      chai.request(app)
          .post('/api/signup')
          .send({
            "name": "Jigar",
            "email": "jigar@unbox.com",
            "password": ""
          })
            .end((err, res) => {
                res.should.have.status(400);
            done();
          });
    }); 
});

// test to signup with password less than 6 characters
describe('/POST signup', () => {
    it('It should NOT POST a user to signup with a password less than 6 characters', (done) => {
      
      chai.request(app)
          .post('/api/signup')
          .send({
            "name": "Jigar",
            "email": "jigar@unbox.com",
            "password": "1234"
          })
            .end((err, res) => {
                res.should.have.status(400);
            done();
          });
    }); 
});


// test to signin with existing account
describe('/POST signin', () => {
    it('It should POST a user to signin with existing account', (done) => {
      
      chai.request(app)
          .post('/api/signin')
          .send({
            "email": "jigar@unbox.com",
            "password": "123456"
          })
            .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    }); 
});

// test to signin with an email id that does not exist
describe('/POST signin', () => {
    it('It should NOT POST a user to signin with an email that does not exist', (done) => {
      
      chai.request(app)
          .post('/api/signin')
          .send({
            "email": "jigar@unboxxxxxx.com",
            "password": "123456"
          })
            .end((err, res) => {
                res.should.have.status(400);
            done();
          });
    }); 
});

// test to signin with an incorrect password
describe('/POST signin', () => {
    it('It should NOT POST a user to signin with an email that does not exist', (done) => {
      
      chai.request(app)
          .post('/api/signin')
          .send({
            "email": "jigar@unbox.com",
            "password": "1234567890"
          })
            .end((err, res) => {
                res.should.have.status(401);
            done();
          });
    }); 
});

// test to signin without password
describe('/POST signin', () => {
    it('It should NOT POST a user to signin without a password', (done) => {
      
      chai.request(app)
          .post('/api/signin')
          .send({
            "email": "jigar@unbox.com",
            "password": ""
          })
            .end((err, res) => {
                res.should.have.status(401);
            done();
          });
    }); 
});

// test to signin without email id
describe('/POST signin', () => {
    it('It should NOT POST a user to signin without an email id', (done) => {
      
      chai.request(app)
          .post('/api/signin')
          .send({
            "email": "",
            "password": "123456"
          })
            .end((err, res) => {
                res.should.have.status(400);
            done();
          });
    }); 
});

// test to signout
describe('/GET signout', () => {
    it('It should signout a user', (done) => {
      
      chai.request(app)
          .get('/api/signout')
            .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    }); 
});


// test to get a user
describe('GET /user/:userId', () => {
    it('It should return a user with the corresponding userId', (done) => {
      
      chai.request(app)
          .get('/api/user/5ed2b1fa069cdf42fbb35fb4')
          .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyYjFmYTA2OWNkZjQyZmJiMzVmYjQiLCJpYXQiOjE1OTA4NjY0Njl9.l_4qoaA0JUm3b5gvhTddJ8i5_8YduSSLBpltOSTQG9s')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
  
  });
