import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GalleryViewer from '../components/Carousel/GalleryViewer'
import Restaurant from '../components/Restaurants/Restaurant'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Restaurant />} />
      <Route path="/gallery" element={<GalleryViewer />} />
    </Routes>
  )
}
