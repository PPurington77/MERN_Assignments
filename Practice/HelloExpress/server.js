const express = require("express");
const app = express();
const port = 8000;

//for post request
//these are express middleware functions  that provide and parse the data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// req is short for request
// res is short for response

const users = [
  { firstName: "Patrick", lastName: "Purington" },
  { firstName: "Debby", lastName: "Purington" },
  { firstName: "Erek", lastName: "Purington" },
];

app.get("/api", (req, res) => {
  res.json({
    message: "Hello World",
    chimi: "changa",
  });
});

// app.get("/api/users", (req, res) => {
//   res.json( users );
// });

app.post("/api/users", (req, res) => {
  //req.body contains form data from postman or react
  console.log(req.body);
  //we can push it into the users array for now..later it will be inserted into a db
  users.push(req.body);
  //always have to respond with something
  res.json({ status: "ok" });
});

// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  console.log(req.params.id); // assuming this id is the index of the users array we could return one user this way
  res.json(users[req.params.id]);
});

//updating data
app.put("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  const id = req.params.id; // assuming this id is the index of the users array we can replace the user like so
  users[id] = req.body; // we always need to respond with something
  res.json({ status: "ok" });
});

app.delete("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  const id = req.params.id;
  // assuming this id is the index of the users array we can remove the user like so
  users.splice(id, 1);
  // we always need to respond with something
  res.json( { status: "ok" } );
});


const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
