
//This is where we put all or computational knowledge (Includes the functions of the app)

//We are looping through to see a student by there id
//we import the student seervice so that it can be used 
const mydb = require("../models/mydb.js");

const db = require ('../models/db_connection.js');//connecting to the database

/*
const getstudents = () =>{
    console.log("Getting here ",mydb);
    return mydb;
};


const getStudentById =  () => {
    for(i =1; i<5; i ++){
        if(request.params.studentId == mydb[i].id){
            return response.status(200).send(mydb[i]);
        }
        console.log(mydb[i]);
    }  
    return null;
};


*/
//Creating a function to connect to the data base
const getAllStudents = () => {
    db.query ('SELECT * FROM students', 
        (err,results) => {
        if (err){
            return "ERROR CONNECTING TO THE DATABASE ";}
        else{
            console.log("Results from db", results);
        return results;}
    });
}


////for functions to work we must first make sure we export them

module.exports ={getAllStudents, getStudentById,getstudents};

