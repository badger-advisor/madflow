const mongoose = require('mongoose');
const controller = require('../controllers/flowController');
const httpMocks = require('node-mocks-http');
const app = require('../server');
const supertest = require('supertest');

require('dotenv').config();
const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

beforeAll(
  async () => await mongoose.connect(db).then(() => console.log('DB connection successful!'))
);
afterAll(
  async () => await mongoose.connection.close().then(() => console.log('DB connection is closed!'))
);

test('GET /flow/getFlow', async () => {
  await supertest(app)
    .get('/flow/getFlow?flowID=618b5fba5cc64e2bd1a95bc0') // ?flowID=618b5fba5cc64e2bd1a95bc0
    //.send({ flowID: '618b5fba5cc64e2bd1a95bc0' })
    .expect(200)
    .then(response => {
      // Check types and length
      expect(Object.keys(response.body).length).toEqual(6);
      expect(typeof response.body.name).toEqual('string');
      expect(Array.isArray(response.body.elements)).toBeTruthy();
      expect(typeof response.body.googleId).toEqual('string');
      expect(typeof response.body.major).toEqual('string');
    });
});
