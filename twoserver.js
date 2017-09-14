var http = require('http');

var PORT = 7000;

function handleRequest(req,res){
    res.end("You're very sweet"+req.url);

};

var server = http.createServer(handleRequest);

server.listen(PORT);

//next server code


var PORT = 7500;

function handleRequest(req,res){
    res.end("You're not very nice"+req.url);
};

var server = http.createServer(handleRequest);

server.listen(PORT);

//one server can not listen to two servers at the same time