const request = require('supertest');
const app = require('../server');
const User = require('../models/User');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('Auth Routes', () => {
    it('should register a new user', async () => {
        const res = await request(app)
          .post('/api/auth/register')
          .send({
            username: 'john',
            email: 'john@test.com',
            password: '123456',
          });
        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toEqual('User created successfully');
    });

    it('should login an existing user', async () => {
        const res = await request(app)
          .post('/api/auth/login')
          .send({
            email: 'john@test.com',
            password: '123456',
          });

        expect(res.statusCode).toEqual(200);
        expect(res.body.token).toBeDefined();
    });
});