const mongoose = require('mongoose');
const app = require('../server');
const supertest = require('supertest');
const Flow = require('../models/flowModel');

require('dotenv').config();
const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

beforeAll(
  async () => await mongoose.connect(db).then(() => console.log('DB connection successful!'))
);
afterAll(
  async () => await mongoose.connection.close().then(() => console.log('DB connection is closed!'))
);
var flowID = '';
test('POST /flow/newFlow', async () => {
  await supertest(app)
    .post('/flow/newFlow')
    .send({ name: 'Flow-Elements-Test', elements: [], googleId: 'tkach940', major: 'Math' })
    .expect(200)
    .then(response => {
      // Check types and length
      flowID = response.body['flow']._id;
      expect(Object.keys(response.body['flow']).length).toEqual(6);
      expect(Array.isArray(response.body['flow'].elements)).toBeTruthy();
      expect(typeof response.body['flow'].name).toEqual('string');
      expect(typeof response.body['flow'].googleId).toEqual('string');
      expect(typeof response.body['flow'].major).toEqual('string');
    });
});

test('POST /flow/updateElements', async () => {
  await supertest(app)
    .post('/flow/updateElements')
    .send({ id: flowID, elements: [ 1, 2, 3 ] })
    .expect(200)
    .then(response => {
      // Check type and length
      expect(response.body.modifiedCount).toEqual(1);
      expect(response.body.matchedCount).toEqual(1);
    });
});

test('GET /flow/getFlow', async () => {
  await supertest(app)
    .get('/flow/getFlow?flowID=' + flowID)
    //.send({ flowID: flowID })
    .expect(200)
    .then(response => {
      // Check types and length
      expect(Object.keys(response.body).length).toEqual(6);
      expect(typeof response.body.name).toEqual('string');
      expect(Array.isArray(response.body.elements)).toBeTruthy();
      expect(typeof response.body.googleId).toEqual('string');
      expect(typeof response.body.major).toEqual('string');
      expect(response.body.elements).toEqual([ 1, 2, 3 ]);
      expect(response.body.name).toEqual('Flow-Elements-Test');
      expect(response.body.major).toEqual('Math');
    });
});

test('POST /flow/update', async () => {
  await supertest(app)
    .post('/flow/update')
    .send({
      id      : flowID,
      changes : {
        name     : 'Flow-Elements-Tests',
        major    : 'CS',
        googleId : 'tkach941',
        elements : [ 1, 2, 3, 4, 5 ]
      }
    })
    .expect(200)
    .then(response => {
      // Check type and length
      expect(response.body.modifiedCount).toEqual(1);
      expect(response.body.matchedCount).toEqual(1);
    });
});

test('GET /flow/getFlow', async () => {
  await supertest(app)
    .get('/flow/getFlow?flowID=' + flowID)
    //.send({ flowID: flowID })
    .expect(200)
    .then(response => {
      // Check types and length
      expect(Object.keys(response.body).length).toEqual(6);
      expect(typeof response.body.name).toEqual('string');
      expect(Array.isArray(response.body.elements)).toBeTruthy();
      expect(typeof response.body.googleId).toEqual('string');
      expect(typeof response.body.major).toEqual('string');
      expect(response.body.elements).toEqual([ 1, 2, 3, 4, 5 ]);
      expect(response.body.name).toEqual('Flow-Elements-Tests');
      expect(response.body.major).toEqual('CS');
      expect(response.body.googleId).toEqual('tkach941');
    });
});

test('DELETE /flow/removeFlow', async () => {
  await supertest(app)
    .delete('/flow/removeFlow?id=' + flowID)
    //.send({ id: flowID })
    .expect(200)
    .then(response => {
      // Check type and length
      expect(Object.keys(response.body).length).toEqual(6);
      expect(typeof response.body.name).toEqual('string');
      expect(Array.isArray(response.body.elements)).toBeTruthy();
      expect(typeof response.body.googleId).toEqual('string');
      expect(typeof response.body.major).toEqual('string');
    });
});
