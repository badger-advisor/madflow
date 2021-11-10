const mongoose = require('mongoose');
const controller = require('../controllers/flowController');
const httpMocks = require('node-mocks-http');
require('dotenv').config();
const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

beforeAll(
  async () => await mongoose.connect(db).then(() => console.log('DB connection successful!'))
);
afterAll(
  async () => await mongoose.connection.close().then(() => console.log('DB connection is closed!'))
);

describe('Flows retrieved ', () => {
  it('First test', async () => {
    // let req = mockRequest();
    // req.query.googleId = 'tkach940';
    // const res = mockResponse();
    // ret = await controller.getAllUserFlows(req, res);
    // //console.log(prop.flows[0].googleId);
    // expect(ret.flows[0].googleId).toBe('tkach940');
    // response = index.getAllUserFlows('tkach940');
    // console.log(response);
    // done();

    const request = httpMocks.createRequest({
      method : 'GET',
      url    : '/flow/getUserFlows',
      query  : { googleId: 'tkach940' }
    });
    const response = httpMocks.createResponse();
    //ret = controller.getAllUserFlows(request, response);
    await controller.getAllUserFlows(request, response, err => {
      expect(err).toBeFalsy();
    });
    console.log(response);

    //const { property } = JSON.parse(response._getData());
    //console.log(property);
  });
});
