// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
    const navigate = useNavigate();

    const handleOrderNow = () => {
        navigate('/login'); 
    };

    return (
        <div className="home-page"> 
            <div className="hero">
                <h1>SendIT</h1>
                <p>Your reliable courier service for parcel delivery.</p>
                <button onClick={handleOrderNow}>Order Now</button>
            </div>
        </div>
    );
};

export default Home;
