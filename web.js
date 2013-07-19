var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var readFile = "index.html";

app.get('/', function(request, response) {
  response.send(getFileText());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var getFileText = function(){
    var buffer = fs.readFileSync(readFile);
    return buffer.toString("utf8", 0, buffer.length);
} 
