const router = require('express').Router();
const { dogsData } = require('../db/seedData');

/* ========== GET/READ DOGS PROFILES ========== */
router.get('/', function(req, res, next) {
  console.log('DOG get endpoint rendered');
  res.json(dogsData[0]);

});

/* ========== DELETE DOGS PROFILES ========== */
router.delete('/', function(req, res, next) {
  console.log('DOG delete endpoint rendered');
  const firstEl = dogsData.shift();
  dogsData.push(firstEl);
  console.log('TEMP', dogsData.length);
  res.status(204).end();

});

module.exports = router;