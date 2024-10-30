// The equivalent of import in js is 'require'
const express = require('express');
//This is initializing the express framework . This is most necessary to have an express app 
const app = express();
//assigning the variable app to the function express like import pandas as pd" where app is the pd and express pandas 
const port = 3000;
//we create a port for the app.. Ensure the port is unique so that you have no conflicts 
//Anytime your making a request to the front end goes directly to that port 

app.listen(port, () => {

    console.log("This is a backend file ");
    console.log(`My app is listening at http://localhost:${port}`);
    console.log("God is good all the time if he aint then you lying in the rain in the shine God is good all the time ");
});


//using the get function to create end points//
//GET
//The next are parameters after the end point 
app.get('/greetings', (request,response) => {
    return response.send("Hello Elijah The Great");
});
//////////* *NOTE : We have to manually go the the opened web page and change the url including our end point :
////localhost:3000/greetings//






