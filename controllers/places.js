const { route } = require('express/lib/application');

const router = require('express').Router();


router.get('/create', (req, res) => {
  res.render('places/create');
});

router.get('/:id', (req, res) => {
  res.render('places/detail', { id: req.params.id });
});

router.post('/', (req, res) => {
  console.log('req.body', req.body);
  res.send('POST /places');
});

router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai-photo-1583475020839-105dddecc00a.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coding-cat-cafe-istockphoto-962973582-1024x10.jpg'
  }];

  res.render('places/index', { places });
});


module.exports = router;