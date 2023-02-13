const db = require('../../database');

const displayRestaurants = (req, res, next) => {
 try {
  db.query('select * from restaurants', async (err, results) => {
   if (err) {
    res.json({ message: err })
   }
   else {
    res.json({
     status: 200,
     message: 'successfully got the list of all restaurants',
     data: results
    })
   }
  })
 } catch (error) {
  res.send({
   message: error
  })
 }
}

const addRestaurant = (req, res, next) => {
 try {
  const { RestaurantName, Address, Price } = req.body;
  const { Images } = req.file
  let imgsrc = 'http://localhost:8080/uploads/' + req.file.filename
  db.query(`INSERT into restaurants (RestaurantName ,Address ,Price ,Images) VALUES ("${RestaurantName}","${Address}","${Price}","${imgsrc}")`, (err, row) => {
   if (err) res.send(err)
   if (row) {
    res.json({
     RestaurantName,
     Address,
     Price,
     Images: imgsrc
    })
   }
  })
 } catch (error) {
  res.json({ message: error })
 }
}

module.exports = { addRestaurant, displayRestaurants }