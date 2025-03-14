module.exports = {
    default: {
      require: ['tests/steps/**/*.ts'],
      format: ['html:test-results/cucumber-report.html'],
      publishQuiet: true,
      paths: ['tests/features/**/*.feature']
    }
  };