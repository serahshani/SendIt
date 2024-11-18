# /backend/app/routes.py

from flask import Blueprint, request, jsonify
from . import db
from .models import User, Parcel, OrderStatus
from app.auth.email_notifications import send_status_update_email


routes = Blueprint('routes', __name__)

@routes.route('/parcels', methods=['POST'])
def create_parcel():
    """Create a new parcel delivery order."""
    data = request.get_json()
    user_id = data.get('user_id')
    origin = data.get('origin')
    destination = data.get('destination')
    weight = data.get('weight')
    price = weight * 10  # Example calculation for price based on weight

    parcel = Parcel(
        user_id=user_id,
        origin=origin,
        destination=destination,
        weight=weight,
        price=price,
        status="Pending"
    )

    db.session.add(parcel)
    db.session.commit()

    return jsonify({"message": "Parcel created", "parcel_id": parcel.id}), 201

@routes.route('/parcels/<int:parcel_id>', methods=['PUT'])
def update_parcel_status(parcel_id):
    """Update the status or location of a parcel."""
    parcel = Parcel.query.get_or_404(parcel_id)
    data = request.get_json()
    new_status = data.get('status')
    new_location = data.get('location')

    # Add a new status update
    status_update = OrderStatus(parcel_id=parcel_id, status=new_status, location=new_location)
    db.session.add(status_update)
    parcel.status = new_status  # Update main parcel status
    db.session.commit()

    # Notify user of status update
    user = parcel.user
    send_status_update_email(user.email, parcel_id, new_status)

    return jsonify({"message": "Parcel status updated"}), 200

@routes.route('/parcels/<int:parcel_id>', methods=['GET'])
def get_parcel(parcel_id):
    """Get details of a parcel by its ID."""
    parcel = Parcel.query.get_or_404(parcel_id)
    parcel_data = {
        "id": parcel.id,
        "origin": parcel.origin,
        "destination": parcel.destination,
        "weight": parcel.weight,
        "price": parcel.price,
        "status": parcel.status,
        "user_id": parcel.user_id,
        "created_at": parcel.created_at,
        "updated_at": parcel.updated_at
    }
    return jsonify(parcel_data)
