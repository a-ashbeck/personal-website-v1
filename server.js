// Require dependencies
var express = require('express');

// Server setup variables
var app = express();
var port = process.env.PORT || 3000;

// Set app to listen to the port defined above
app.listen(port);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// Listen on port 3000
app.listen(PORT, function() {
  console.log('App running on port ' + PORT);
});

// Require the routes set in burger_controller.js
require('./controllers/apps_controller.js')(app);
