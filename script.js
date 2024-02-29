// Intsall nodejs before installing express
// first install express using-->npm install express


// importing the express module to run the features
const express = require('express')
const app = express()



// Creating a middleware to control the route
app.use(function (req, res, next) {
    // next();
    next();
});


// default route using get request method which is built in express
app.get('/', function (req, res) {

    // Sending the message for the default page 
    res.send('Hello World')
})

app.get('/about', function (req, res) {

    // Sending the message for the default page 
    res.send('Welcome to about page')
})

app.get('/contact', function (req, res) {

    // Sending the message for the default page 
    res.send('Welcome to contact page')
})



// running the server on HTTP default port that 3000 which is changeable
app.listen(3000)
