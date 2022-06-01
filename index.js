// CONFIGURATION
require('dotenv').config();
const express = require('express');
const app = express();

// MIDDLEWARE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));

// ROUTES
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
  res.render('home'); //render means the response renders the home module
});

app.get('*', (req, res) => {
  res.render('error404');
});

app.listen(process.env.PORT);