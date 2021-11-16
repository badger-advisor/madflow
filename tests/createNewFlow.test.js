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

test('POST /flow/newFlow', async () => {
  await supertest(app)
    .post('/flow/newFlow')
    .send({ name: 'Test-create-flow-6', elements: [ 6 ], googleId: 'tkach940', major: 'Math' })
    .expect(200)
    .then(response => {
      // Check types and length
      expect(Object.keys(response.body['flow']).length).toEqual(6);
      expect(Array.isArray(response.body['flow'].elements)).toBeTruthy();
      expect(typeof response.body['flow'].name).toEqual('string');
      expect(typeof response.body['flow'].googleId).toEqual('string');
      expect(typeof response.body['flow'].major).toEqual('string');
    });
});
