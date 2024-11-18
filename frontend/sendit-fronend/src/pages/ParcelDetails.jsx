// src/pages/ParcelDetails.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import './ParcelDetails.css';

const ParcelDetails = () => {
    const { orderId } = useParams(); // Get the order ID from the URL
    const [orderDetails, setOrderDetails] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');

    // Simulate fetching order details
    React.useEffect(() => {
        // Simulated order details based on orderId
        const simulatedOrderData = {
            id: orderId,
            recipientName: "John Doe",
            recipientAddress: "123 Main St, Anytown, USA",
            senderName: "Jane Smith",
            senderAddress: "456 Elm St, Othertown, USA",
            trackingNumber: "TRACK123456",
            deliveryMethod: "Express",
            weight: "2 kg",
            status: "In Transit",
            estimatedDelivery: "2024-12-01",
            deliveryNotes: "Leave at front door if not home.",
            timeline: [
                { event: "Order Placed", date: "2024-11-01" },
                { event: "Shipped", date: "2024-11-02" },
                { event: "Out for Delivery", date: "2024-12-01" }
            ]
        };

        // Simulate a delay to mimic an API call
        setTimeout(() => {
            setOrderDetails(simulatedOrderData);
            setLoading(false);
        }, 1000); // Simulate a 1-second loading time
    }, [orderId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!orderDetails) {
        return <p>No order details found.</p>;
    }

    return (
        <div className="parcel-details-background"> {/* Added class name for background */}
            <div className="parcel-details-container">
                <h2>Parcel Details</h2>
                <p><strong>Order ID:</strong> {orderDetails.id}</p>
                <p><strong>Recipient Name:</strong> {orderDetails.recipientName}</p>
                <p><strong>Recipient Address:</strong> {orderDetails.recipientAddress}</p>
                <p><strong>Sender Name:</strong> {orderDetails.senderName}</p>
                <p><strong>Sender Address:</strong> {orderDetails.senderAddress}</p>
                <p><strong>Tracking Number:</strong> {orderDetails.trackingNumber}</p>
                <p><strong>Delivery Method:</strong> {orderDetails.deliveryMethod}</p>
                <p><strong>Weight:</strong> {orderDetails.weight}</p>
                <p><strong>Status:</strong> {orderDetails.status}</p>
                <p><strong>Estimated Delivery:</strong> {orderDetails.estimatedDelivery}</p>
                <p><strong>Delivery Notes:</strong> {orderDetails.deliveryNotes}</p>

                <h3>Timeline</h3>
                <ul>
                    {orderDetails.timeline.map((event, index) => (
                        <li key={index}>
                            {event.event} on {event.date}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ParcelDetails;