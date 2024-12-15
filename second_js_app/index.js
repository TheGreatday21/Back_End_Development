// The equivalent of import in js is 'require'
const express = require('express');
//This is initializing the express framework . This is most necessary to have an express app. Its like a pip3 install type shi 
const app = express();
//assigning the variable app to the function express like import pandas as pd" where app is the pd and express pandas (storing the express variable ina variable )
const port = 5008;
//we create a port for the app.. Ensure the port is unique so that you have no conflicts 
//Anytime your making a request to the front end goes directly to that port 
const my_business_logic = require("./service/my_business_logic.js");

//app.listen will only appear in my console but not on the ui

app.listen(port, () => {
    console.log(`My app is listening at http://localhost:${port}`);
});

/*
                            ------------------END POINTS------------------
        A) GET END POINT 

//The next are parameters after the end point 
/////////NOTE : We have to manually go the the opened web page and change the url including our end point 

/////NOTE ///If you want to lengthen an end point we use the "-" in js not the "_"

//THIS IS OUR CURRENT CONTROLLER THAT GETS THE FUNCTIONS FROM THE OTHERS MODELS AND SERVICE AND CALLS THEM TO SHOW ON THE UI 
//AT THIS POINT WE IMPORT THE FUNCTIONS 
*/
app.get ('/list-of-students', (res,req) =>{
    console.log("I got here too");
    return response.send(my_business_logic.getstudents());
});

/*
                    ----------POST-------------
example 1
*/
app.post("/sign-up",(req,res) =>{
    console.log("Logging request body", request.body);
    return response.status
});

/*
                                                -------SUMMARY------------
THE FRONT END ALSO KNOWN AS THE UI 
THE BACKEND (API) BROKEN DOWN TO THREE

///1. Controller 
Anything that has the end point goes to the controller . This is where all the staff from the model ans service are called using key termg like:-
    `app.get`
    `app.listen`

////2. Service
 This is where we store all our functions for the app
Using key terms like `const` to create the functions 
    `const getstudents = () =>{`
    `console.log("Getting here ",mydb);`
    `return mydb;`
    `}`
    
////3. Model-database 
Keeps all the files in the queries are stored here (DATA)
Involves the business logic folders and information

let students = [{"name":"Keks", "id":1}];
    
*/

app.get ('/get-all-students', (request,response) => {
    
    //return response.status(200).send(my_business_logic.listStudents());
    return response.send(my_business_logic.listStudents());

});


