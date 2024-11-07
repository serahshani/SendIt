import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createParcel } from '../redux/parcelActions';

const ParcelForm = () => {
    const dispatch = useDispatch();
    const [pickupLocation, setPickupLocation] = useState('');
    const [destination, setDestination] = useState('');
    const [weight, setWeight] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createParcel({ pickupLocation, destination, weight }));
    };

    return (
        <div className="parcel-form">
            <h3>Create Parcel Delivery Order</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Pickup Location:</label>
                    <input 
                        type="text" 
                        value={pickupLocation} 
                        onChange={(e) => setPickupLocation(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Destination:</label>
                    <input 
                        type="text" 
                        value={destination} 
                        onChange={(e) => setDestination(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Weight (kg):</label>
                    <input 
                        type="number" 
                        value={weight} 
                        onChange={(e) => setWeight(e.target.value)} 
                        required 
                        min="0.1" 
                        step="0.1"
                    />
                </div>
                <button type="submit">Create Order</button>
            </form>
        </div>
    );
};

export default ParcelForm;
