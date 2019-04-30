var express = require('express');
var router = express.Router();
const axios = require('axios');
const $ = require('cheerio');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const response = await axios(
    'https://www.culvers.com/restaurants/louisville-hurstbourne'
  );
  const html = response.data;
  const fotd = $('div.ModuleRestaurantDetail-fotd > h2 > strong', html);
  console.log(fotd[0].children);
  res.send({ flavorOfTheDay: fotd[0].children[0].data });
});

module.exports = router;
