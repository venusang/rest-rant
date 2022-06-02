const { route } = require('express/lib/application');
const router = require('express').Router();
const places = require('../models/places.js');

router.get('/create', (req, res) => {
  res.render('places/create');
});

router.get('/:id', (req, res) => {
  res.render('places/detail', { id: req.params.id });
});

router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400';
  }
  if (!req.body.city) {
    req.body.city = 'Anytown';
  }
  if (!req.body.state) {
    req.body.state = 'USA';
  }
  places.push(req.body);
  res.redirect('/places');
});

router.get('/', (req, res) => {
  res.render('places/index', { places });
});


module.exports = router;