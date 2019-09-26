const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();

//Template engine
app.engine("handlebars", handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));


//Routes and Templates
app.get("/", function(req, res){
   /*res.sendFile(__dirname+"/index.html"); 
   console.log(req.params.id);*/
   res.render('index');
});

//Start server
app.listen(3000, function(req, res){
    console.log('Servidor está rodando!');
});