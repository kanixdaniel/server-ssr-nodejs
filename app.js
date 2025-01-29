const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (err) => { });

// middleware para servir contenido estatico
app.use(express.static('public'));

app.get('/', (req ,res) => {
  res.render('home', {
    nombre: 'Kanix Daniel',
    titulo: 'Curso de NodeJS'
  });
});

app.get('/generic', (req ,res) => {
  res.render('generic', {
    nombre: 'Kanix Daniel',
    titulo: 'Curso de NodeJS'
  });
});

app.get('/elements', (req ,res) => {
  res.render('elements', {
    nombre: 'Kanix Daniel',
    titulo: 'Curso de NodeJS'
  });
});

app.get('*', (req ,res) => {
  res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, '', () => {
  console.log(`Servidor NodeJS corriendo en el puerto: ${port}`)
})