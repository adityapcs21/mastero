const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const restaurantRoute = require('./src/routes/restaurantRoute')


app.use('/restaurant', restaurantRoute)

app.listen(8080, () => {
 console.log("app is working");
})