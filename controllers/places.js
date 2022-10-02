const { route } = require('express/lib/application');
const router = require('express').Router();
const places = require('../models/places.js');
const states = require('../models/states.js');

// Create get - this shows the create page
router.get('/create', (req, res) => {
  res.render('places/create', { states });
});

// Detail get- also called Show page 
// this shows the details of a particular place based it's id
router.get('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render('error404');
  } else if (!places[id]) {
    res.render('error404');
  } else {
    res.render('places/detail', { place: places[id], id });
  }
});

// Create post - this creates the new place on submit
router.post('/', (req, res) => {
  console.log('req.body', req.body);
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