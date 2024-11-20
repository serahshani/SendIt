import React, {useState, useEffect} from "react";
import {GoogleMaps, loadScript, Marker} from '@react-google-maps/api';
import {sendEmailNotification} from './emailService';
import 'tailwind/tailwind.css';


const Admin = ()=> {
    const [parcelId, setParcelId] = useState('')
const [status, setStatus] = useState('')
const [pickupLocation, setPickupLocation] = useState({}) 
const [destinationLocation, setDestinationLocation] = useState({})

const handleUpdateStatus = () => {
    if (!parcelId || ! status) {
        alert('Please enter both  parcel ID and status')
        return
    }
    //sending email notification
    sendEmailNotification(parcelId, status);
    alert('parcel status updated and sent notification message!');
};
return(
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Admin Parcel Management</h1>
      <input type="text"
       placeholder="parcel ID" 
       value={parcelId} 
       onChange={(e) => setParcelId(e.target.value)}
      className="border p-2 mb-2 rounded"/>

      <input type="text"
      placeholder="status"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="border p-2 mb-4 rounded"/>

      <button onClick={handleUpdateStatus}
       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Status</button>

       <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
        id="admin-map"
          mapContainerStyle={{ height: "400px", width: "800px" }}
          zoom={5}
          center={pickupLocation}>
            <Marker position={pickupLocation} />
            <Marker position={destinationLocation} />
          </GoogleMap>
          </LoadScript>
          </div>
);
};

export default Admin;
        

        



    


    
            

            