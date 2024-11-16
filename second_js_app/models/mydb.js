//This is where we store all our raw data for the app/ Most people use dbms like mongo db or mysql commonly

//Example 1
//Declare a variable that will show a list of your friends
let students_2= ['Elijah','Gundu','Joshua','Simon_do','John','Stacy'];

//Example 2
let students =[
    {'id':1,'name':'Elijah'},
    {'id':2,'name':'Gundu'},
    {'id':3,'name':'Joshua'},
    {'id':4,'name':'Simon_do'},
    {'id':5,'name':'John'},
    {'id':6,'name':'Stacy'},
];

module.exports = {students,students_2};
//The endpoints are then declared in the controller 