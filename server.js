var express = require('express');
var path = require('path');
var app = express();

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

app.use(express.static('public'));

app.get('/students', function(request, response) {
  console.log('--- Sending Students Array: ---\n', students, '\n --- END OF ARRAY ---');
  response.send(students);
})

var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('Listening on port', port);
})
