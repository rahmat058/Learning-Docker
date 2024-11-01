const http = require("http");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const max = _.max(numbers);
  res.end("Hello I am from Docker!: " + max);
});

server.listen(3000);
