const express = require("express");
const app = express();
const port = 8000;

// req is short for request
// res is short for response

const users = [
  {firstName: 'Patrick', lastName: 'Purington'},
  {firstName: 'Debby', lastName: 'Purington'},
  {firstName: 'Erek', lastName: 'Purington'}
];

app.get("/api", (req, res) => {
  res.json({
    message: "Hello World",
    chimi: "changa"
  });
});

app.get("/api/users", (req, res) => {
  res.json( users );
});

const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
