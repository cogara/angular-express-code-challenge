var express = require('express');
var path = require('path');
var app = express();

//students array
var students = [
  "Andrew Kolander",
  "Anthony Maki",
  "Brian Anderson",
  "Brian Verduzco",
  "Connor O'Gara",
  "Cormac Strahan",
  "Donovan Goertzen",
  "Hillary Manning",
  "Jon Wilson",
  "Justin Doty",
  "Katie Vogel",
  "Kyle Quamme",
  "Liz Kerber",
  "Megan Martinson",
  "Richard Camara",
  "Ryan Mattson",
  "Sahasha Reese",
  "Tracy Vincent",
  "Trent Johnson"
];

//static files
app.use(express.static('public'));

//send student array to client when requested
app.get('/students', function(request, response) {
  console.log('--- Sending Students Array: ---\n', students, '\n --- END OF ARRAY ---');
  response.send(students);
})

//server listen
var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('Listening on port', port);
})
