import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from "supertest";
const jest = require('jest');

import { app } from '../app';

let mongo=beforeAll(async () => {
    process.env.JWT_COOKIE_EXPIRES_IN = 1;
    process.env.JWT_SECRET = 'my-secret-to-use-create-jwt-tokens.ihope-this-is-long_enough.lol.';
    process.env.JWT_EXPIRES_IN = 1;

    const mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    await mongoose.connect(mongoUri, {
        
    });

    return mongo;
})

beforeEach(async () => {
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
        await collection.deleteMany({})        
    }
})

afterAll(async () => {
    await mongo?.stop();
    await mongoose.connection.close();
})








