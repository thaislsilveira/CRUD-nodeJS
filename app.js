const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();


//Start server
app.listen(3000, function(req, res){
    console.log('Servidor está rodando!');
});