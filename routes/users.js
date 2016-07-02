var Converter = require ('csvtojson').Converter;

var express = require('express');
var router = express.Router();
var converter = new Converter({});

var jsonData;

converter.fromFile("./data/titles_less.csv",function(err,result){
 jsonData = result;
 console.log("Data loaded");
});

/* GET users listing. */
router.get('/data', function(req, res, next) {
  res.json(jsonData);
});

router.get('/',function(req, res) {
  res.render('data', {
    searchTerm: '',
    hostip: 'localhost:3000'
  });
});

router.get('/:searchTerm',function(req, res) {
    res.render('data', {
        searchTerm: req.params.searchTerm,
        hostip: 'localhost:3000'
    });
});

module.exports = router;
