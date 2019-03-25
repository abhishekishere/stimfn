var http = require("http");




var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8'); 
    res.end("Hey there, I'm a Node.js project 💡 🚚");
});
server.listen(4000);
