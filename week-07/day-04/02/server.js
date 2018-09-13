// Declare our dependencies
var express = require("express");
var app = express();

var path = require("path");

// Setting up express

var PORT = 3005;

app.use(express.static("public"));
// Declaring our initial students
var students = [
  {
    id: 0,
    name: "Harry Potter",
    house: "Gryffindor",
    img: "http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bd6c.png",
    skills: []
  },{
    id: 1,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    img: "http://purepng.com/public/uploaads/large/purepng.com-luna-with-magical-wandharry-potterjkrollingginnyscarypremadeswordmagicspellronaldronnyweaselyrongeorgehermioneluna-241519480015g9oot.png",
    skills: []
  },{
    id: 2,
    name: "Hermione Granger",
    house: "Gryffindor",
    img: "https://vignette.wikia.nocookie.net/polski-dubbing/images/3/3b/Hermiona_Granger.png/revision/latest?cb=20160505205558&path-prefix=pl",
    skills: []
  }
];


// Serving the HTML
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/add.html"));
});

app.get("/learn", function(req, res) {
  res.sendFile(path.join(__dirname, "learn.html"));
});

// API ROUTES
// ================== YOUR WORK HERE ==============
app.get("/api/students/all", function(req, res){
  return res.json(students);
});

app.get("/api/students/:id" , function(req,res){
  var sId  = parseInt(req.params.id);
  for (var i = 0; i < students.length; i++) {
    if(sId === students[i].id){
      return res.json(students[i].id);
    }
  }
});

app.post("/api/students/add", function(req,res){
  students.push(req.body);
  res.json(true);
});

app.put("/api/students/:id/learn" , function(req,res){
  var sId  = parseInt(req.params.id);
  for (var i = 0; i < students.length; i++) {
    if(sId === students[i].id){
      var thisStdnt = students[i].id;
      thisStdnt.learn = true;
      return res.json(thisStdnt);
    }
  }
});

app.delete("/api/students/:id" , function(req,res){
  var sId  = parseInt(req.params.id);
  for (var i = 0; i < students.length; i++) {
    if(sId === students[i].id){
      delete(students[i]);
    }
  }
});


// ================================================

// 1. `GET` "/api/students/all". Returns all students.
// 2. `GET` "/api/students/:id". Returns JSON for a specific student. User will need to manually type the id into the url to see the JSON.
// 3. `POST` "/api/students/add". Adds a new student.
// 4. `PUT` "/api/students/:id/learn". Adds a new skill for the student.
// 5. `DELETE` "/api/students/:id". Removes a student.


// Start the server listening on the designated port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});