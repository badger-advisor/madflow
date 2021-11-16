const mongoose = require('mongoose');
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

test('POST /flow/updateElements', async () => {
  await supertest(app)
    .post('/flow/updateElements')
    .send({ id: '618b5fba5cc64e2bd1a95bc0', elements: [ 1, 2, 3, 4, 5, 6 ] })
    .expect(200)
    .then(response => {
      // Check type and length
      expect(response.body.modifiedCount).toEqual(1);
      expect(response.body.matchedCount).toEqual(1);
    });
});
