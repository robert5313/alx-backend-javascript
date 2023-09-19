const http = require('http');
const url = require('url');
const querystring = require('querystring');
const countStudents = require('./3-read_file_async');

const app = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url);
  const path = parsedUrl.pathname;
  const query = querystring.parse(parsedUrl.query);

  if (path === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello Holberton School!\n');
  } else if (path === '/students') {
    if (request.method === 'GET') {
      countStudents(query.database)
        .then(() => {
          response.statusCode = 200;
          response.setHeader('Content-Type', 'text/plain');
          response.end('This is the list of our students\n');
        })
        .catch((error) => {
          response.statusCode = 404;
          response.setHeader('Content-Type', 'text/plain');
          response.end(error.message);
        });
    } else {
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/plain');
      response.end('Invalid method\n');
    }
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Not found\n');
  }
});

app.listen(1245);

module.exports = app;
