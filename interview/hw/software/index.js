const neatCsv = require('neat-csv');
const fs = require('fs');
var express = require("express");
// var app = express();

let students, courses, marks, tests;
function readFile(id, file) {
    fs.readFile(file, async (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        switch(id) {
            case 1: students = await neatCsv(data);
            readFile(2, myArgs[0])
            break;
            case 2: courses = await neatCsv(data);
            readFile(3, myArgs[3]);
            break;
            case 3: marks = await neatCsv(data);
            readFile(4, myArgs[2]);
            break;
            case 4: tests = await neatCsv(data);
            exportFile();
            break;
        }
    })
}
function exportFile() {
    let result = [];
    students.forEach(element=>{
        let stMarks = marks.filter(
            function(data){ return data.student_id == element.id }
        );
        stMarks1 = stMarks.filter((arr, index, self) =>
        index === self.findIndex((t) => (t.test_id === arr.test_id)));
        let stTests = [];
        stMarks1.forEach(el => {
            let test = tests.filter(
                function(data){ return data.id == el.test_id }
            );
            stTests.push(test[0]);
        })
        stTests1 = stTests.filter((arr, index, self) =>
        index === self.findIndex((t) => (t.course_id === arr.course_id)));
        let stCourses = [];
        stTests1.forEach(el=> {
            let course = courses.filter(
                function(data){ return data.id == el.course_id }
            );
            stCourses.push(course[0]);
        })
        let avgTotal = 0;
        stCourses.forEach(el=>{
            let mark = 0;
            let grade = 0;
            let avgGrade = 0;
            stTest1 = stTests.filter(
                function(data){ return data.course_id == el.id }
            );
            stTest1.forEach(el1=>{
                stMarks1 = stMarks.filter(
                    function(data){ return data.test_id == el1.id }
                );
                mark +=parseInt(el1.weight);
                grade += parseInt(el1.weight) * parseInt(stMarks1[0].mark);
            })
            if (mark == 100) {
                avgGrade = (grade / 100).toFixed(1);
            } else {
                avgGrade = 'error';
            }
            el.courseAverage = avgGrade;
            avgTotal += parseFloat(avgGrade);
        })
        let item = {
            id: element.id,
            name: element.name,
            totalAverage: (avgTotal/stCourses.length).toFixed(2),
            courses: stCourses 
        }
        result.push(item);
    })
    try {
        fs.writeFileSync(myArgs[4], JSON.stringify({students: result}))
    } catch (err) {
        console.error(err)
    }
}
var myArgs = process.argv.slice(2);
readFile(1, myArgs[1]);


// app.listen(3000, () => {
//  console.log("Server running on port 3000");
// });