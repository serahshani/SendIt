import './Home.css'; // Ensure CSS is correctly linked
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); // Navigate hook

    const handleOrderNow = () => {
        navigate('/order');
    };

    return (
        <div className="home-page"> {/* home-page class used here */}
            <div className="hero">
                <h1>SendIT</h1>
                <p>Your reliable courier service for parcel delivery.</p>
                <button onClick={handleOrderNow}>Order Now</button>
            </div>
        </div>
    );
};

export default Home;