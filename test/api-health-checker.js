const axios = require('axios');
const assert = require("assert");

// TEST
describe("API Health Checker", function() {

  // Getting environment variable 'input'
  var inputFile = process.env.input;

  // Logging to console
  console.log('Loading file ' + inputFile + '...');

  // Load current file
  var data = require(inputFile);

  // Runs endpoints validations
  validateEndpoints(data.endpoints);

});

/**
 * Validates a list of endpoints
 */
function validateEndpoints(endpoints) {

  // Iterates over each endpoint and validate it individually
  endpoints.forEach(endpoint => {

    // Calls every validation test
    it('Validating ' + endpoint.url + ' for status code ' + endpoint.status, function (done) {
      validateEndpoint(endpoint, done);
    });
  });
}

/*
 * Validates endpoint status code is the expected one
 */
async function validateEndpoint(endpoint, done) {

    // Setting headers and extra configuration
    let config = {};
    config.headers = endpoint.headers;

    try {

      // Executing a GET request
      const response = await get(endpoint.url, config);

      // Validating response status code
      assert.equal(endpoint.status, response.status, 'Unexpected status code ' + response.status +  ' for ' + endpoint.url + ', expected ' + endpoint.status);

      done();
    }
    catch (err) { done(err); }
}

/*
 * Executes a GET request
 */
async function get(url, config) {
  let response = await axios.get(url, config);
  return response;
}
