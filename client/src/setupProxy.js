const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    [ '/auth', '/user' ],
    createProxyMiddleware({
      target : 'http://localhost:8080'
    })
  );
};
