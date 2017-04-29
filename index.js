var http = require('http');
var url = require('url');
var path = require('path');
var express = require('express');
var app = express();

var port = process.env.PORT || 8000;





var server = http.createServer(function (request, response) {
    
    var date = new Date();
    var urlObj = url.parse(request.url, true);
    var time = urlObj.query;
    var pathname = urlObj.pathname;
    
    if (pathname === "/") {
        response.end("new home page");
    }
    
    else if (pathname === '/hi') {
        response.end("hi");
    }
    
    else if (pathname === '/date') {
        response.end(date.toJSON());
    }
    
    
    
});

server.listen(port);

console.log('Server running on port ' + port);