import { Container, Grid } from '@mui/material'
import { Stack } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RestaurantCard from '../Card/RestaurantCard'

export default function Restaurant() {
 const [listRestaurant, setListResturant] = useState([])
 useEffect(() => {
  (async function ApiCalling() {
   let result = await axios.get(`http://localhost:8080/restaurant/listRestaurants`);
   if (result && result.data) {
    setListResturant(result.data.data)
   }
  })()
 }, [])

 return (
  <Container>
   <Stack>
    <Grid container spacing={3}>
     {listRestaurant.map((item, index) => (
      <Grid key={index} item sm={6} md={4} lg={3}>
       <RestaurantCard data={item}/>
      </Grid>
     ))
     }
    </Grid>
   </Stack>
  </Container>
 )
}
