const path = require('path');
const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/read',(req, res) => {
  res.render('read');
})

app.get('/create', (req, res) => {
  res.render('create');
})

app.get('/update', (req, res) => {
  res.render('update');
})

app.get('/delete', (req, res) => {
  res.render('delete');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})