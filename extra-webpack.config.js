module.exports = {
  node: { global: true, }, // Fix: "Uncaught ReferenceError: global is not defined", and "Can't resolve 'fs'".
  externals: {
    'purecloud-platform-client-v2': "require('platformClient')",
  },
}
