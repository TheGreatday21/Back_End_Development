// The equivalent of import in js is 'require'
const express = require('express');
//This is initializing the express framework . This is most necessary to have an express app. Its like a pip3 install type shi 
const app = express();
//assigning the variable app to the function express like import pandas as pd" where app is the pd and express pandas (storing the express variable ina variable )
const port = 5001;
//we create a port for the app.. Ensure the port is unique so that you have no conflicts 
//Anytime your making a request to the front end goes directly to that port 

app.listen(port, () => {

    console.log("This is a backend file ");
    console.log(`My app is listening at http://localhost:${port}`);
    console.log("God is good all the time if he aint then you lying in the rain in the shine God is good all the time ");
});

/*
//using the get function to create end points//
//GET
//The next are parameters after the end point 
app.get('/greetings', (request,response) => {
    return response.send("Hello Elijah The Great");
});
//////////* *NOTE : We have to manually go the the opened web page and change the url including our end point :
////localhost:3000/greetings//


//Declare a variable that will show a list of your friends
let friends = ['Elijah','Gundu','Joshua','Simon_do','John','Stacy'];
//Lets declare the endpoint 
app.get('/list' , (request,response) =>{
    return response.send(`This is a list of some of my friends ${friends}`);
}
);


/////NOTE ///If you want to lengthen an end point we use the "-" in js 
///example app.get('/list-of-friends')


////Making the above list to OBJECTS 

let friend =[
    {'id':1,'name':'Elijah'},
    {'id':2,'name':'Gundu'},
    {'id':3,'name':'Joshua'},
    {'id':4,'name':'Simon_do'},
    {'id':5,'name':'John'},
    {'id':6,'name':'Stacy'},
];
app.get('/list-of-friends-by-id' , (request,response) =>{

    return response.send(friend);
    }
);
*/

                                            ////Request parameters///////
let student =[
    {'id':1,'name':'Elijah'},
    {'id':2,'name':'Gundu'},
    {'id':3,'name':'Joshua'},
    {'id':4,'name':'Simon_do'},
    {'id':5,'name':'John'},
    {'id':6,'name':'Stacy'},
];

app.get ('/list-of-friends-by-id /: studentId', (request,response) =>{

    console.log("Logging request params",request.params);
    
    console.log("Use value from the front end" ,request.params.studentId);

    for(let x = 0 ; x<7 ;x++ ){
        if(request.params.studentId == student[x].id){
            return response.send(student[x]);
        }
        console.log(student[x]);
    }
    return response.send('FOUND NOTHING ');
});