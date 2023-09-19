const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const headers = lines[0].split(',');
        const students = lines.slice(1);
        const countByField = {};

        headers.forEach((field) => {
          countByField[field] = 0;
        });

        students.forEach((student) => {
          const studentData = student.split(',');

          headers.forEach((field, index) => {
            if (studentData[index].trim() !== '') {
              countByField[field]++;
            }
          });
        });

        console.log(`Number of students: ${students.length}`);
        Object.keys(countByField).forEach((field) => {
          console.log(`Number of students in ${field}: ${countByField[field]}. List: ${getStudentList(students, headers.indexOf(field))}`);
        });

        resolve();
      }
    });
  });
}

function getStudentList(students, fieldIndex) {
  const studentList = [];
  students.forEach((student) => {
    const studentData = student.split(',');
    if (studentData[fieldIndex].trim() !== '') {
      studentList.push(studentData[fieldIndex].trim());
    }
  });
  return studentList.join(', ');
}

module.exports = countStudents;

