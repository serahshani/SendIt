import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCog, FaBox, FaHome } from 'react-icons/fa' // Sidebar icons
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow
} from '@react-google-maps/api'

const AdminDashboard = () => {
  const [parcel, setParcel] = useState({
    senderName: '',
    receiverName: '',
    weight: '',
    pickupLocation: '',
    destination: '',
    status: 'Pending',
    currentLocation: ''
  })

  const [selectedLocation, setSelectedLocation] = useState(null)

  const handleInputChange = e => {
    setParcel({ ...parcel, [e.target.id]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Updated Parcel Details:', parcel)
    setParcel({
      senderName: '',
      receiverName: '',
      weight: '',
      pickupLocation: '',
      destination: '',
      status: 'Pending',
      currentLocation: ''
    })
  }

  // Coordinates for Google Maps (example location in Nairobi)
  const center = {
    lat: 1.2921, // Latitude of Nairobi
    lng: 36.8219 // Longitude of Nairobi
  }

  const mapContainerStyle = {
    height: '400px',
    width: '100%'
  }

  return (
    <div className='flex h-screen bg-yellow-500'>
      {/* Sidebar */}
      <div className='w-72 bg-gradient-to-b from-yellow-600 to-yellow-400 text-white p-6 space-y-8 shadow-xl'>
        <h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
          Admin Dashboard
        </h2>
        <ul className='space-y-6'>
          <li>
            <Link
              to='/'
              className='flex items-center py-2 px-4 rounded-lg hover:bg-yellow-700 transition duration-300'
            >
              <FaHome className='mr-3' /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to='/parcels'
              className='flex items-center py-2 px-4 rounded-lg hover:bg-yellow-700 transition duration-300'
            >
              <FaBox className='mr-3' /> Parcels
            </Link>
          </li>
          <li>
            <Link
              to='/settings'
              className='flex items-center py-2 px-4 rounded-lg hover:bg-yellow-700 transition duration-300'
            >
              <FaCog className='mr-3' /> Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className='flex-1 p-10 space-y-6'>
        {/* Parcel Management Form */}
        <motion.div
          className='bg-white p-8 rounded-lg shadow-xl border-t-4 border-yellow-500'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className='space-y-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {[
                {
                  id: 'senderName',
                  label: "Sender's Name",
                  placeholder: 'Enter sender name'
                },
                {
                  id: 'receiverName',
                  label: "Receiver's Name",
                  placeholder: 'Enter receiver name'
                },
                {
                  id: 'weight',
                  label: 'Weight (kg)',
                  placeholder: 'Enter weight in kilograms'
                },
                {
                  id: 'currentLocation',
                  label: 'Current Location',
                  placeholder: 'Enter current location'
                },
                {
                  id: 'pickupLocation',
                  label: 'Pickup Location',
                  placeholder: 'Enter pickup location'
                },
                {
                  id: 'destination',
                  label: 'Destination',
                  placeholder: 'Enter destination'
                }
              ].map(input => (
                <div key={input.id} className='space-y-3'>
                  <label className='block text-lg font-semibold text-gray-800'>
                    {input.label}
                  </label>
                  <input
                    type={input.id === 'weight' ? 'number' : 'text'}
                    id={input.id}
                    value={parcel[input.id]}
                    onChange={handleInputChange}
                    className='w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300'
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
            </div>
            <div className='space-y-3'>
              <label className='block text-lg font-semibold text-gray-800'>
                Status
              </label>
              <select
                id='status'
                value={parcel.status}
                onChange={handleInputChange}
                className='w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300'
              >
                <option value='Pending'>Pending</option>
                <option value='In Transit'>In Transit</option>
                <option value='Delivered'>Delivered</option>
              </select>
            </div>
            <div className='text-center mt-8'>
              <motion.button
                type='submit'
                className='px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Update Parcel
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Google Map */}
        <div className='mt-12'>
          <h3 className='text-xl font-semibold mb-4'>
            Parcel Locations on the Map
          </h3>
          <LoadScript googleMapsApiKey='AIzaSyCBn_7yvkHNGI2o7b_wl11-nlXZd38KT9M'>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={12}
            >
              <Marker
                position={center}
                onClick={() => setSelectedLocation(center)}
              />
              {selectedLocation && (
                <InfoWindow
                  position={selectedLocation}
                  onCloseClick={() => setSelectedLocation(null)}
                >
                  <div>
                    <h2>
                      {parcel.senderName} - {parcel.receiverName}
                    </h2>
                    <p>{parcel.status}</p>
                    <p>
                      {parcel.pickupLocation} to {parcel.destination}
                    </p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard;
