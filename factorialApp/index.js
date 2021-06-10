const { Router } = require('express');
const express = require('express'); 
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


router.get('/', function (req, res){
    res.render("factorial");
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});

