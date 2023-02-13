const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer');
const restaurantCont = require('../controller/restaurantsController');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

router.get('/listRestaurants', restaurantCont.displayRestaurants);
router.post('/addRestaurants', upload.single('Images'), restaurantCont.addRestaurant);


module.exports = router