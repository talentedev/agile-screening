const npsUtils = require("nps-utils");
 
module.exports = {
  scripts: {
    default: "vue-cli-service serve",
    lint: "vue-cli-service lint",
    test: {
      default: "jest"
    },
    build: {
      default: "vue-cli-service build"
    },
    validate: npsUtils.concurrent.nps("lint", "test", "build")
  }
};