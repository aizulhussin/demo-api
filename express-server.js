var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

// POST http://localhost:8080/api/users
// parameters sent with 
app.post('/api/users', function(req, res) {

    var password_hc = "p@ssw0rd";
    var userid_hc = "kurt_cobain";
    var token = "12345";
    var user_id = req.body.id;
    var password = req.body.password;
    var geo = req.body.geo;

    if(user_id===userid_hc && password === password_hc){
        res.send(user_id + ' ' + token + ' ' + geo);
    }else{
        res.send("ERROR");
    }

    
});


app.listen(3000, () => {
 console.log("Server running on port 3000");
});