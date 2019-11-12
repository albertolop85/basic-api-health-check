// Required packages
const apiHealthChecker = require('./app/api-health-checker')

// Get arguments for endpoint files
var args = process.argv.slice(2);

// Iterates over each file argument
args.forEach(file => {

  // Logging to console
  console.log('Loading file ' + file + '...');

  // Load current file
  var data = require(file);

  // Runs endpoints validations
  apiHealthChecker.validateEndpoints(data.endpoints);

});
