const Provider = require('react-redux').Provider
const store = require('../src/index').store
const withRedux = require('addon-redux').withRedux

const withReduxSettings = {
  UserProvider: Provider,
  store
}

const withReduxDecorator = withRedux(withReduxSettings)

module.exports = {
  decorators: [withReduxDecorator]
};
