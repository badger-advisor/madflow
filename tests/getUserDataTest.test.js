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

test('GET /profile/', async () => {
  await supertest(app).get('/profile/').send({ user: 'test' }).expect(302);
});

test('GET /user/deleteUser', async () => {
  await User({
    googleId       : 'test',
    name           : 'test',
    email          : 'test',
    profilePicture : 'test'
  }).save();
  await supertest(app)
    .post('/user/deleteUser')
    .send({ googleId: 'test' })
    .expect(200)
    .then(response => {
      // Check type and length
      let temp = response.body;
      expect(typeof temp.name).toEqual('string');
      expect(typeof temp.email).toEqual('string');
      expect(typeof temp.profilePicture).toEqual('string');
      expect(typeof temp.googleId).toEqual('string');
    });
});
