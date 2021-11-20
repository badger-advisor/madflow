const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../server');
const User = require('../models/userModel');
require('dotenv').config();

const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// Setup and teardown
beforeAll(async () => await mongoose.connect(db), 60 * 1000); // give 60 seconds to connect to db, default 5
afterAll(async () => await mongoose.connection.close());

/** #################### tests begin below #################### */

describe('Testing Google OAuth', () => {
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
});

describe('Testing user controller functions', () => {
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
});
