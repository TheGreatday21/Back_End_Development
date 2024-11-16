-- Active: 1731387864684@@127.0.0.1@3306@school_db

USE school_db;


CREATE TABLE students(
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR (100),
    age INT ,
    course VARCHAR(50)
);

INSERT INTO students(name,age,course)
VALUES ("John Doe",20,"BSDS"),
        ("Jane Smith",18,"BSIT"),
        ("Blue John",19,"BSCS");

SELECT * FROM students;

















