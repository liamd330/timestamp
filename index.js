var http = require('http');
var url = require('url');
var path = require('path');
var express = require('express');
var app = express();
var moment = require('moment');


var port = process.env.PORT || 8000;
var public = __dirname + "/public/";



app.get("/", function(request, response) {
    response.sendFile(path.join(public + "index.html"));
})


app.use(express.static(path.join(__dirname, 'public')));

    
app.get(/(Jan)|(Feb)|(Mar)|(Apr)|(May)|(Jun)|(Jul)|(Aug)|(Sep)|(Oct)|(Nov)|(Dec)/gi, function (request, response) {
    
    var urlPath = url.parse(request.url, true);
    var pathname = urlPath.path.slice(1);
    var parsedDate = moment(pathname).format("MMMM DDDD YYYY");
    var unixtime = moment(pathname).unix().toString();
    
    jsonFile = {
        "Natural Time" : parsedDate,
        "Unixtime" : unixtime
    }
    
   response.end(JSON.stringify(jsonFile));
});    

/*
app.get(/^[0-9]/, function (request, response) {
    
    jsonFile = {
        "Natural Time" : null,
        "Unixtime" : null
    }
    
    response.end(JSON.stringify(jsonFile));

})
*/



app.get(/^[0-9]/, function(request, response) {
    
    var urlPath = url.parse(request.url, true);
    var pathname = urlPath.path.slice(1);
    var parsedDate = moment("1-1-1970").add(pathname, 'seconds').format("MMMM DDDD YYYY");
    var unixtime = moment(pathname).unix().toString();
    
    jsonFile = {
        "Natural Time" : parsedDate,
        "Unixtime" : unixtime
    }
    
   response.end(JSON.stringify(jsonFile));
 
 
})





app.listen(port);

console.log('Server running on port ' + port);