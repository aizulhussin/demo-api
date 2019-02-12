var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

var a = "welcome"
b = "undeclared";
//let a = "123"
//let b = 123

//if(a===b){
//    console.log("a===b")
//}

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});