import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: -1.286389, // Nairobi Latitude
  lng: 36.817223 // Nairobi Longitude
}

function ParcelTracking () {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCBn_7yvkHNGI2o7b_wl11-nlXZd38KT9M'
  })

  if (loadError) {
    return <div>Error loading Google Maps</div>
  }

  if (!isLoaded) {
    return <div>Loading Map...</div>
  }

  return (
    <div>
      <h2>Track Your Parcel</h2>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </div>
  )
}

export default ParcelTracking
