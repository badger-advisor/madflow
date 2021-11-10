const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    [ '/user', '/auth/google' ],
    createProxyMiddleware({
      target : 'http://localhost:8080'
    })
  );
};
