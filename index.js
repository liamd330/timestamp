var http = require('http');
var url = require('url');
var path = require('path');
var express = require('express');
var app = express();

var port = process.env.PORT || 8000;

var public = __dirname + "/public/";

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(request, response) {
    response.sendFile(path.join(public + "index.html"));
})


/*


var server = http.createServer(function (request, response) {
    
    var date = new Date();
    var year = date.getYear().toString();
    var month = (Number(date.getMonth()) + 1).toString();
    var day = date.getUTCDate().toString();
    var unix = date.getTime().toString();
    
    var urlObj = url.parse(request.url, true);
    var time = urlObj.query;
    var pathname = urlObj.pathname;
   
    
    response.sendFile(path.join(public + "index.html"));
    
    
    if (pathname === "/") {
        response.end("new home page");
    }
    
    else if (pathname === '/hi') {
        response.end("hi");
    }
    
    else if (pathname === '/date') {
        response.end(month + date + year);
    }
    
    
    
    
    
    
    
    
}); 

*/


app.listen(port);

console.log('Server running on port ' + port);