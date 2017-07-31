var http = require('http')
var url = require('url');
var fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
  console.log('Running the query : ', req.url);
  var q = url.parse(req.url, true).query;
  // console.log(q.year);
  fs.readFile('./src/hello.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080); //the server object listens on port 8080


