const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  require('@cypress/code-coverage/task', '@cypress/instrument-cra')(on, config);
  o;
  return config;
};
