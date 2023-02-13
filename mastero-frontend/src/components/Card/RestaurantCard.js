import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useState } from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import GalleryViewer from '../Carousel/GalleryViewer';

export default function RestaurantCard({ data }) {
  const [open, setOpen] = useState(false)
  let GalleryImages = JSON.parse(data.Images);
  return (
    <Card sx={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
      <CardMedia
        component="img"
        height="194"
        image={data.CoverImages}
        alt="CoverImages"
      />
      <CardContent>
        <Typography variant="h6">{data.RestaurantName}</Typography>
        <Typography variant="body2" sx={{ color: { sm: '#686b78' } }}>Mughlai,Indian,Chinese</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px' }}>
          <Box sx={{ width: '50px', display: 'flex', justifyContent: 'space-between', background: '#48c479', padding: '2px 6px' }}>
            <StarRateIcon fontSize='small' />
            <Typography variant="body2">{data.ratings}</Typography>
          </Box>
          <Typography variant="body2" sx={{ color: { sm: '#686b78' } }}>₹{data.Price} FOR TWO</Typography>
        </Box>
      </CardContent>
      {
        open && GalleryImages &&
        <GalleryViewer open={open} handleClose={() => setOpen(false)} data={GalleryImages} />
      }
    </Card>
  )
}
