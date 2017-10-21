// Server.js
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Import packages
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const router = require('./routes/routes')
const morgan = require('morgan')

 // Using cookie-parser and body-parser to process HTTP requests through our API
 app.use(require('cookie-parser')())

 // For parsing different types of data in HTTP requests
 app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
 app.use(bodyParser.json());                                     // parse application/json
 app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json


// Declare the port to listen on:
var port = process.env.PORT || 8080;

// Serve the static (Angular) app. In English: Tell Node where the front-end is. 
app.use(express.static(path.join(__dirname, 'public')))

// Serve the API
app.use('/api', router)

// Listen to app on port:
app.listen(port)
console.log("Listening on port: " + port)

// Export the app so it can be accessed anywhere in the project
module.exports = app
