module.exports = {
    default: {
      require: ['tests/steps/**/*.ts'],
      format: ['html:test-results/cucumber-report.html'],
      paths: ['tests/features/**/*.feature'],
      requireModule: ['ts-node/register']
    }
  };