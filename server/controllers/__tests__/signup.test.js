import supertest from 'supertest';
import app from './../../app.js';
import isPortReachable from 'is-port-reachable';

const agent = supertest.agent(app);

let request = supertest(app);
describe('POST /login',async function () {
    
    it('logs in the user',async function (done) {
        
      const user = {email: 'test@mail.com', password: 'test1234'};
      agent
        .post('http://127.0.0.1:8000/api/v1/auth/login')
        .send(user)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          console.log(res.body);
          done();
        });
    });
  });

