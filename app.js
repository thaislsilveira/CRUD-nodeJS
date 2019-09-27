const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();
const urlencodeParser=bodyParser.urlencoded({extended:false});
const sql=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306
});

sql.query("use nodejs");

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

app.get("/inserir", function(req, res){
    res.render("inserir");
});

app.post("/controllerForm", urlencodeParser, function(req, res){
    sql.query("insert into user values (?,?,?)", [req.body.id, req.body.name, req.body.age]);
    res.render('controllerForm', {name:req.body.name});
});

//Start server
app.listen(3000, function(req, res){
    console.log('Servidor está rodando!');
});