var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(100);

fs.readFileSync('index.html',function(err,data){
  if (err) throw err;
  buffer.write(data);
});

app.get('/', function(request, response) {
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
