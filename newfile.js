// Programmers Names: Stephanos Khoury ,Rula yosef
//The code creates an HTTP server that serves an HTML file.
const http = require("http");
const fs = require("fs");

let html = fs.readFileSync(`${__dirname}/templates/page.html`);

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(html);
});
server.listen(3000);
console.log("Http server at http://localhost:3000");
