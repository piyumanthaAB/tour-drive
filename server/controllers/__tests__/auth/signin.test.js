import request from "supertest";
import app from '../../../app.js';



// it('returns a 200 on successful signin', async () => {
//     // console.log('test 1 ran');
//     // return request(app).post('/api/v1/auth/login').send({ email: 'test@mail.com', password: 'test1234' }).expect(200);
// })



describe('POST /api/v1/auth/login', () => {
    
    test("should respond with 200 sattus code", async () => {
        const response = await request(app).post("/api/v1/auth/login").send({
            email: "test@mail.com",
            password: "test1234"
          })
          expect(response.statusCode).toBe(200)
    })

})

