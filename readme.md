### Description

#Overview
For today's code challenge, you will be creating an Angular application that retrieves a list of students from your server and displays them on the page for the user to view.

#Client
When the page first loads, the user should be presented with a display button that when clicked will call a function on your controller to fetch the list of students using the `$http` service and display it in a list on the page. It will look like [this](https://ninjastorage.blob.core.windows.net/html/M9FLD/index.html#a6dc2c72-7210-8348-3a96-b0b0ec3434ef).

#Server
The server should serve the index page of your application at the root url. The server should also have a `/students` route that will respond to GET requests with a list of students in the class. You can use the following list of students.

```javascript
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
```
