var http = require('http');
var dt = require('./time_module');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end('</br>Hello World .....!');
}).listen(3000);