//import faker
const { faker } = require("@faker-js/faker");
//import express
const express = require("express");
const app = express();
const port = 8000;
//for Post request
app.use( express.json() );
app.use( express.urlencoded({ extended: true }));

//User object
const createUser = () => {
    const newUser = {
        password : faker.internet.password(),
        email : faker.internet.email(),
        phoneNumber : faker.phone.number(),
        lastName : faker.name.lastName(),
        firstName : faker.name.firstName(),
        id : faker.datatype.number()
    };
    return newUser;
};

// const user = createUser();
// console.log(user);

//Company object
const createCompany = () => {
    const newCompany = {
        id : faker.datatype.number(),
        name : faker.company.name(),
        address : [{
            street : faker.address.street(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipcode : faker.address.zipCode(),
            country : faker.address.country()
        }]
    }
    return newCompany;
}

// const company = createCompany();
// console.log(company);

//ROUTES

//api route /api/users/new that returns a new user
app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

//route /api/companies/new that returns a new company
app.get("/api/company/new", (req, res) => {
    res.json(createCompany());
});
// route /api/user/compnay that returns new user and copany
app.get("/api/user/company", (req, res) => {
    res.json([createUser(), createCompany()]);
    
});

const server = app.listen(port, () => 
    console.log(`Server is ready on port ${server.address().port}`)
);
