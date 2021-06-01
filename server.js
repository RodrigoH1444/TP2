
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 8080;

app.set('view engine', 'hbs');

//Parciales
hbs.registerPartials( __dirname + '/views/partials');

//Estilo
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Rodrigo Harispe',
        titulo: 'Mi Primer Blog'
    })
  });


app.get('/mystory', function (req, res) {
    res.render('mystory')
  });

  app.get('/mytastes', function (req, res) {
    res.render('mytastes')
  });

 
app.listen(port, () => {

    console.log(`Escuchando el servidor en el puerto http://localhost:${port}`);
});