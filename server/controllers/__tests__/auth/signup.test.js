import request from "supertest";
import app from '../../../app.js';




describe('POST /api/v1/auth/signup', () => {
    
    test("should respond with 201 sattus code", async () => {
        const response = await request(app).post("/api/v1/auth/signup").send({
            email: "test@mail.com",
            password: "test1234",
            passwordConfirm: "test1234"

          })
          expect(response.statusCode).toBe(201)
    })

})