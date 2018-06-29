const router = require('express').Router();
const { catsData } = require('../db/seedData');

/* ========== GET/READ CAT PROFILE ========== */
router.get('/', function(req, res, next) {
  res.json(catsData[0]);
  console.log('CAT get endpoint')

});

/* ========== DELETE CATS PROFILES ========== */
router.delete('/', function(req, res, next) {
  console.log('CAT delete endpoint rendered');

  // remove first element of the arra
  const firstEl = catsData.shift();

  // add element to the end of the array
  catsData.push(firstEl);
  res.status(204).end();
});

module.exports = router;