import React from 'react';
import ParcelList from '../components/ParcelList';
import ParcelForm from '../components/ParcelForm';
import MapView from '../components/MapView';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to SendIT Courier Service</h1>
            <ParcelForm />
            <ParcelList />
            <MapView />
        </div>
    );
};

export default HomePage;
