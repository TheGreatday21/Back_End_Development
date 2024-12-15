
//This is where we put all or computational knowledge (Includes the functions of the app)


const mydb = require("../models/mydb.js");

const db = require ('../models/db_connection.js');//connecting to the database




//Creating a functions  to connect to the data base
/////////////////////FOR THE mydb databse /////////
const getstudents = () => {
    console.log("Getting here ");
    return mydb.students;
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



//////////////////////FOR THE db_connection database////////////
const listStudents = () => {
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

module.exports ={listStudents, getstudents, getStudentById};





