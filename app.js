const express = require('express');
const hbs = require('hbs');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

//handlebars.js
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {

});

//Serv static content
app.use( express.static('public') );

app.get('/', (req, res)=>{
  res.render('home', {
    nombre: 'Jesus Milano',
    titulo: 'Mi primer node server con Express'
  });
});

app.get('/generic', (req, res)=>{
  res.render('generic', {
    nombre: 'Jesus Milano',
    titulo: 'Generic page'
  });
});

app.get('/elements', (req, res)=>{
  res.render('generic', {
    nombre: 'Jesus Milano',
    titulo: 'Elements page'
  });
});

app.get('*', (req, res)=>{
  res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, ()=>{
  console.log(`Listing to port: ${port}`)
});