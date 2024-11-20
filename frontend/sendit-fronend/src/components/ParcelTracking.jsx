import React from "react";
import { GoogleMap, LoadScript, Marker, Polyline } from "@react-google-maps/api";
import "./ParcelTracking.css";

const ParcelTracking = () => {
  // Example tracking data
  const defaultCenter = { lat: 37.7749, lng: -122.4194 }; // Starting point (San Francisco)
  const deliveryDestination = { lat: 37.7849, lng: -122.4294 }; // Destination point

  // Path to show parcel's movement
  const polylinePath = [
    { lat: 37.7749, lng: -122.4194 },
    { lat: 37.7780, lng: -122.4244 }, // Example waypoint
    { lat: 37.7849, lng: -122.4294 },
  ];

  // Map styles
  const mapStyles = {
    height: "300px",
    width: "100%",
    borderRadius: "15px",
    overflow: "hidden",
  };

  return (
    <div className="tracking-container">
      <h1 className="tracking-header">Parcel Tracking</h1>
      
      {/* Map Section */}
      <div className="map-container">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={13}>
            {/* Starting Point Marker */}
            <Marker 
              position={defaultCenter} 
              label="Start"
              icon="https://img.icons8.com/color/48/000000/marker.png"
            />
            {/* Destination Marker */}
            <Marker 
              position={deliveryDestination} 
              label="Destination"
              icon="https://img.icons8.com/color/48/000000/marker.png"
            />
            {/* Polyline for Path */}
            <Polyline path={polylinePath} options={{ strokeColor: "#FFA500", strokeWeight: 4 }} />
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Courier Information Section */}
      <div className="courier-info">
        <h2>Parcel Details</h2>
        <div className="courier-card">
          <p><strong>Current Location:</strong> San Francisco</p>
          <p><strong>Destination:</strong> 123 Market St, San Francisco</p>
          <p><strong>Status:</strong> In Transit</p>
          <p><strong>Estimated Delivery:</strong> 2:00 PM</p>
        </div>
      </div>

      {/* Additional Stats or Progress */}
      <div className="parcel-progress">
        <h2>Delivery Progress</h2>
        <div className="progress-bar">
          <div className="progress" style={{ width: "75%" }}></div>
        </div>
        <p>75% Completed</p>
      </div>
    </div>
  );
};

export default ParcelTracking;
