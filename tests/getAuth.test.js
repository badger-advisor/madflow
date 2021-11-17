const mongoose = require('mongoose');
const controller = require('../controllers/flowController');
const httpMocks = require('node-mocks-http');
const app = require('../server');
const supertest = require('supertest');
const User = require('../models/userModel');

require('dotenv').config();
const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

beforeAll(
  async () => await mongoose.connect(db).then(() => console.log('DB connection successful!'))
);
afterAll(
  async () => await mongoose.connection.close().then(() => console.log('DB connection is closed!'))
);

test('GET /auth/google', async () => {
  await supertest(app).get('/auth/google').send({ user: 'test' }).expect(302);
});

test('GET /auth/login', async () => {
  await supertest(app).get('/auth/login').send({ user: 'test' }).expect(200);
});

test('GET /auth/logout', async () => {
  await supertest(app).get('/auth/logout').send({ user: 'test' }).expect(302);
});

test('GET /auth/', async () => {
  await supertest(app).get('/auth/').send({ user: 'test' }).expect(302);
});
