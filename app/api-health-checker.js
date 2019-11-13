// Required packages
const axios = require('axios')
const softAssertion = require('soft-assert')

/*
 * Exports methods for validating a list of endpoints
 */
module.exports = {

  /**
   * Public method for validating a list of endpoints
   */
  validateEndpoints: function(endpoints) {

      // Iterates over each endpoint and validate it individually
      endpoints.forEach(endpoint => {
        validateEndpoint(endpoint.url, endpoint.headers, endpoint.status);
      });

      console.log('Summarizing tests results...');

      // TODO: STILL NOT WORKING
      // Returning result for all soft assertions
      softAssertion.softAssertAll();
  }
};

/*
 * Validates endpoint status code is the expected one
 */
function validateEndpoint(url, headers, status) {

  console.log('Validating ' + url + ' for status code ' + status);

  // Setting headers and extra configurarion
  var config = {};
  config.headers = headers;

  // Executing a GET request
  await axios.get(url, config)
    .then(function (response) {

      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);

      // TODO: STILL NOT WORKING
      // Calling soft assertion to validate status code
      softAssertion.softAssert(response.status, status, 'Status code was not expected');
  });
}
