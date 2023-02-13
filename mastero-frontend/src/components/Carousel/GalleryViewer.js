import { Grid, Modal } from '@mui/material';
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const style = {
 position: 'absolute',
 top: '50%',
 left: '100%',
 transform: 'translate(-50%, -50%)',
 width: 400,
 bgcolor: '#FFFFFF',
 border: '2px solid #000',
 boxShadow: 24,
 p: 4,
};
export default function GalleryViewer({ open, handleClose, data }) {
 console.log(data)
 return (
  <Modal
   open={open}
   onClose={handleClose}
   aria-labelledby="modal-modal-title"
   aria-describedby="modal-modal-description"
  >
   <Grid height="100%">
    <Carousel autoPlay infiniteLoop >
     {
      data.map((image) => (
       <div>
        <img
         style={{ borderRadius: '8px', }}
         alt="img"
         src={image}
        />
       </div>
      ))
     }
    </Carousel>
   </Grid>
  </Modal>
 )
}
