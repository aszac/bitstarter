var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
    var fileContents = fs.readFileSync('index.html', 'utf8').split('\n');
    var buffer = new Buffer(fileContents[0].toString(), 'utf8');
    buffer.toString('utf8');
    response.send(buffer.toString('utf8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
