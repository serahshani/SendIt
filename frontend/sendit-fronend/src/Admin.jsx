import React, { useState } from 'react'
import { motion } from 'framer-motion'

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

  const handleInputChange = e => {
    setParcel({ ...parcel, [e.target.id]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Updated Parcel Details:', parcel)

    // Reset form fields
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

  return (
    <div
      className='flex items-center justify-center h-screen bg-cover bg-center'
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?delivery,logistics')"
      }}
    >
      <motion.div
        className='bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-lg'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
          Manage Parcel
        </h2>
        <form onSubmit={handleSubmit}>
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
              id: 'pickupLocation',
              label: 'Pickup Location',
              placeholder: 'Enter pickup location'
            },
            {
              id: 'destination',
              label: 'Destination',
              placeholder: 'Enter destination'
            },
            {
              id: 'currentLocation',
              label: 'Current Location',
              placeholder: 'Enter current location'
            }
          ].map((input, index) => (
            <div key={input.id} className='mb-4'>
              <label
                htmlFor={input.id}
                className='block text-gray-700 font-medium mb-1'
              >
                {input.label}
              </label>
              <input
                type={input.id === 'weight' ? 'number' : 'text'}
                id={input.id}
                value={parcel[input.id]}
                onChange={handleInputChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                placeholder={input.placeholder}
              />
            </div>
          ))}

          
          <div className='mb-4'>
            <label
              htmlFor='status'
              className='block text-gray-700 font-medium mb-1'
            >
              Status
            </label>
            <select
              id='status'
              value={parcel.status}
              onChange={handleInputChange}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
            >
              <option value='Pending'>Pending</option>
              <option value='In Transit'>In Transit</option>
              <option value='Delivered'>Delivered</option>
            </select>
          </div>

          {/* Submit Button */}
          <motion.button
            type='submit'
            className='w-full bg-yellow-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-yellow-600 transition-colors'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Update Parcel
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

export default AdminDashboard
