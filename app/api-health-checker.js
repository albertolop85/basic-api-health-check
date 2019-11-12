// Required packages
const axios = require('axios')
const softAssertion = require('soft-assert')

/*
 * Exports methods for validating a list of endpoints
 */
module.exports = {

  validateEndpoints: function(endpoints) {

      endpoints.forEach(endpoint => {
        validateEndpoint(endpoint.url, endpoint.status);
      });

      console.log('Summarizing tests results...');

      softAssertion.softAssertAll();
  }
};

/*
 * Validates endpoint status code is the expected one
 */
function validateEndpoint(url, status) {

  console.log('Validating ' + url + ' for status code ' + status);

  axios.get(url)
    .then(function (response) {

      //console.log(response.data);
      //console.log(response.status);
      //console.log(response.statusText);
      //console.log(response.headers);
      //console.log(response.config);

      softAssertion.softAssert(response.status, status, 'Status code was not expected');
  });
}
