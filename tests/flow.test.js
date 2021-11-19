const mongoose = require('mongoose');
const app = require('../server');
const supertest = require('supertest');

require('dotenv').config();
const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// Setup and teardown
beforeAll(async () => await mongoose.connect(db), 60 * 1000); // give 60 seconds to connect to db, default 5
afterAll(async () => await mongoose.connection.close());

describe('All flow functions', () => {
  let flowID = '';

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
    await supertest(app).get('/flow/getFlow?flowID=' + flowID).expect(200).then(response => {
      // Check types and length
      expect(Object.keys(response.body).length).toEqual(6);
      expect(typeof response.body.name).toEqual('string');
      expect(Array.isArray(response.body.elements)).toBeTruthy();
      expect(typeof response.body.googleId).toEqual('string');
      expect(typeof response.body.major).toEqual('string');
      expect(response.body.elements).toEqual([ 1, 2, 3 ]);
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
        expect(response.body.elements).toEqual([ 1, 2, 3 ]);
      });
  });

  describe('User related flow tests', () => {
    test('GET /flow/getUserFlows', async () => {
      await supertest(app)
        .get('/flow/getUserFlows')
        .send({ googleId: '111778573652836733288' })
        .expect(200)
        .then(response => {
          // Check type and length
          expect(Array.isArray(response.body['flows'])).toBeTruthy();
          expect(response.body['flows'].length).toBeGreaterThanOrEqual(0);
        });
    });
  });
});
