var express = require('express'); //carregando módulo do express

var consign = require('consign');

var bodyParser = require('body-parser');

var app = express(); //executando o express

app.set('view engine', 'ejs'); //o mecanismo de engine a ser usado

app.set('views', './app/views'); //diretório onde os arquivos estão localizados

//para ele entender o formato da URL
app.use(bodyParser.urlencoded({extended:true}));

// consign().include('app/routes').into(app);
consign({cwd:'app'})//para incluir a pasta app
    .include('routes')
    .then('config/dbConnection.js')
    .then('models')
    .into(app);
    
module.exports=app;