'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ENDPOINT: '"http://quexten.pw:8000/"',
  APP_ENDPOINT: '"http://quexten.pw:1024/"'
})
