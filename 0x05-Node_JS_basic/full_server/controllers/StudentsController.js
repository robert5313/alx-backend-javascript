import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((students) => {
        let count = 0;
        let output = 'This is the list of our students\n';
        Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).forEach((field) => {
          const list = students[field].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join(', ');
          count += students[field].length;
          output += `Number of students in ${field}: ${students[field].length}. List: ${list}\n`;
        });
        output += `Number of students: ${count}`;
        response.status(200).send(output);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(process.argv[2])
      .then((students) => {
        const list = students[major].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join(', ');
        response.status(200).send(`List: ${list}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;

