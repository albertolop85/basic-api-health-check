//Load express module with `require` directive
/*
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})

//Launch listening server on port 8081
app.listen(8082, function () {
  console.log('app listening on port 8082!')
})
*/

/*
var softAssertion = require("soft-assert")

var variable = 'A'

softAssertion.softAssert('A', variable, 'Variable is not A')
softAssertion.softAssert('B', variable, 'Variable is not B')
softAssertion.softAssert('C', variable, 'Variable is not C')
softAssertion.softAssertAll()
*/

// Required packages
const apiHealthChecker = require('./app/api-health-checker')

// Read input file -> This would change to be external param
const data = require('./sample/endpoint-list-test-1.json')

// Runs validation
apiHealthChecker.validateEndpoints(data.endpoints)
