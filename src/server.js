var http = require('http')
var url = require('url');
var fs = require('fs');
var events = require('events');

var eventEmitter = new events.EventEmitter();
var myEventHandler = function () {
  console.log('I hear a scream!');
}
eventEmitter.on('scream', myEventHandler);

//create a server object:
http.createServer(function (req, res) {
  console.log('Running the query : ', req.url);
  var q = url.parse(req.url, true);

  console.log('q.host : ', q.host);
  console.log('q.pathname : ', q.pathname);
  console.log('q.search : ', q.search);

  var qdata = q.query;
  console.log('qdata : ', qdata);
  eventEmitter.emit('scream');
  // console.log(q.year);
  fs.readFile('./src/hello.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080); //the server object listens on port 8080

