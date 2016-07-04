var Converter = require('csvtojson').Converter;

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var converter = new Converter({});

var jsonData;

converter.fromFile("./data/titles_less.csv", function(err, result) {
  jsonData = result;
  console.log("Data loaded");
});

router.use(bodyParser.json());

/* GET users listing. */
router.get('/data', function(req, res, next) {
  res.json(jsonData);
});

router.get('/', function(req, res) {
  res.render('data', {
    searchTerm: '',
    hostip: 'localhost:3000'
  });
});

/*
    Form sort, filter and select feature endpoints
*/

router.get('/multiselect', function(req, res) {

  // Retrieving data for some sort of fake_id

  res.render('multiselectData', {
    list_id: 'fake_id',
    person: 'fake_person',
    date: new Date()
  });
});

router.post('/multiselect/submit', function(req, res) {

  console.log(req.body);
  res.status(200);
});

router.get('/:searchTerm', function(req, res) {
  res.render('data', {
    searchTerm: req.params.searchTerm,
    hostip: 'localhost:3000'
  });
});

module.exports = router;