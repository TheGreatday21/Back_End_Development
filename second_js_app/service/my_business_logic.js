
//This is where we put all or computational knowledge (Includes the functions of the app)

//We are looping through to see a student by there id
//we import the student seervice so that it can be used 
const mydb = require("../models/mydb.js");

const getstudents = () =>{
    console.log("Getting here ",mydb);
    return mydb;
};

const greetings = require("../models/mydb.js");


const getStudentById =  () => {
    for(i =1; i<5; i ++){
        if(request.params.studentId == mydb[i].id){
            return response.status(200).send(mydb[i]);
        }
        console.log(mydb[i]);
    }  
    return null;
};





