import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'

const mapContainerStyle = {
  width: '100%',
  height: '300px'
}

const defaultCenter = {
  lat: -1.286389,
  lng: 36.817223
}

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

  const [pickupCoords, setPickupCoords] = useState(defaultCenter)
  const [destinationCoords, setDestinationCoords] = useState(defaultCenter)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
    libraries: ['places']
  })

  const handleInputChange = e => {
    setParcel({ ...parcel, [e.target.id]: e.target.value })
  }

  const handlePlaceSelect = async (id, value) => {
    setParcel({ ...parcel, [id]: value })
    try {
      const results = await getGeocode({ address: value })
      const { lat, lng } = await getLatLng(results[0])
      if (id === 'pickupLocation') {
        setPickupCoords({ lat, lng })
      } else if (id === 'destination') {
        setDestinationCoords({ lat, lng })
      }
    } catch (error) {
      console.error('Error fetching coordinates: ', error)
    }
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
    setPickupCoords(defaultCenter)
    setDestinationCoords(defaultCenter)
  }

  if (!isLoaded) return <div>Loading...</div>

  return (
    <div className='d-flex align-items-center justify-content-center min-vh-100 bg-light'>
      <motion.div
        className='bg-white p-5 rounded shadow-lg container'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-center text-primary mb-4'>
          <i className='bi bi-box-seam'></i> Manage Parcel
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='row'>
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
              }
            ].map(input => (
              <div key={input.id} className='col-md-6 mb-3'>
                <label className='form-label'>{input.label}</label>
                <input
                  type={input.id === 'weight' ? 'number' : 'text'}
                  id={input.id}
                  value={parcel[input.id]}
                  onChange={handleInputChange}
                  className='form-control'
                  placeholder={input.placeholder}
                />
              </div>
            ))}

            <div className='col-md-6 mb-3'>
              <label className='form-label'>Pickup Location</label>
              <AutocompleteInput
                id='pickupLocation'
                value={parcel.pickupLocation}
                onPlaceSelect={value =>
                  handlePlaceSelect('pickupLocation', value)
                }
              />
            </div>

            <div className='col-md-6 mb-3'>
              <label className='form-label'>Destination</label>
              <AutocompleteInput
                id='destination'
                value={parcel.destination}
                onPlaceSelect={value => handlePlaceSelect('destination', value)}
              />
            </div>

            <div className='col-md-6 mb-3'>
              <label className='form-label'>Status</label>
              <select
                id='status'
                value={parcel.status}
                onChange={handleInputChange}
                className='form-select'
              >
                <option value='Pending'>Pending</option>
                <option value='In Transit'>In Transit</option>
                <option value='Delivered'>Delivered</option>
              </select>
            </div>
          </div>

          <div className='text-center'>
            <motion.button
              type='submit'
              className='btn btn-primary px-4 py-2'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Update Parcel
            </motion.button>
          </div>
        </form>

        <div className='mt-4'>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={pickupCoords}
            zoom={13}
          >
            <Marker position={pickupCoords} label='Pickup' />
            <Marker position={destinationCoords} label='Destination' />
          </GoogleMap>
        </div>
      </motion.div>
    </div>
  )
}

const AutocompleteInput = ({ id, value, onPlaceSelect }) => {
  const {
    ready,
    value: inputValue,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete()

  return (
    <div>
      <input
        id={id}
        value={inputValue || value}
        onChange={e => setValue(e.target.value)}
        disabled={!ready}
        className='form-control'
        placeholder='Enter location'
      />
      {status === 'OK' && (
        <ul className='list-group mt-2'>
          {data.map(({ place_id, description }) => (
            <li
              key={place_id}
              className='list-group-item list-group-item-action'
              onClick={() => {
                onPlaceSelect(description)
                clearSuggestions()
              }}
            >
              {description}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AdminDashboard
