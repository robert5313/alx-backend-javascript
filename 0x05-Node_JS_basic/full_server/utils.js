import fs from 'fs';

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        const lines = data.trim().split('\n');
        const students = {};
        lines.forEach((line) => {
          const fields = line.split(',');
          const firstName = fields[0];
          const field = fields[fields.length - 1];
          if (!students[field]) {
            students[field] = [];
          }
          if (firstName !== 'firstname' && field !== '') {
            students[field].push(firstName);
          }
        });
        resolve(students);
      }
    });
  });
}
