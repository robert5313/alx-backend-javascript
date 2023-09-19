 const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = {};
    lines.forEach(line => {
      const [firstName, field] = line.split(',');
      if (students[field]) {
        students[field].push(firstName);
      } else {
        students[field] = [firstName];
      }
    });

    console.log(`Number of students: ${lines.length}`);
    Object.entries(students).forEach(([field, names]) => {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
