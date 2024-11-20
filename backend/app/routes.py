from flask import Blueprint, request, jsonify
from app.models import User, Parcel, db
from app.email_utils import send_email
from app import db

main = Blueprint('main', __name__)

@main.route('/api/register', methods=['POST'])
def register():
    data = request.json
    if User.query.filter_by(email=data['email']).first():
        return jsonify({"message": "Email already exists"}), 400
    user = User(username=data['username'], email=data['email'], password=data['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "User registered successfully"}), 201

@main.route('/api/create-parcel', methods=['POST'])
def create_parcel():
    data = request.json
    parcel = Parcel(
        user_id=data['user_id'],
        weight=data['weight'],
        destination=data['destination'],
        pickup_location=data['pickup_location']
    )
    db.session.add(parcel)
    db.session.commit()
    return jsonify({"message": "Parcel created successfully", "parcel_id": parcel.id}), 201

@main.route('/api/parcels/<int:parcel_id>', methods=['GET'])
def get_parcel(parcel_id):
    parcel = Parcel.query.get(parcel_id)
    if not parcel:
        return jsonify({"message": "Parcel not found"}), 404
    return jsonify({
        "id": parcel.id,
        "status": parcel.status,
        "destination": parcel.destination,
        "pickup_location": parcel.pickup_location,
        "present_location": parcel.present_location,
        "weight": parcel.weight,
        "created_at": parcel.created_at
    })

@main.route('/api/update-parcel/<int:parcel_id>', methods=['PATCH'])
def update_parcel(parcel_id):
    data = request.json
    parcel = Parcel.query.get(parcel_id)
    if not parcel:
        return jsonify({"message": "Parcel not found"}), 404

    if 'destination' in data:
        parcel.destination = data['destination']
    if 'status' in data:
        parcel.status = data['status']
        send_email(parcel.user.email, "Parcel Status Updated", f"Your parcel status is now: {parcel.status}")
    if 'present_location' in data:
        parcel.present_location = data['present_location']
        send_email(parcel.user.email, "Parcel Location Updated", f"Your parcel is now at: {parcel.present_location}")

    db.session.commit()
    return jsonify({"message": "Parcel updated successfully"}), 200

@main.route('/api/delete-parcel/<int:parcel_id>', methods=['DELETE'])
def delete_parcel(parcel_id):
    parcel = Parcel.query.get(parcel_id)
    if not parcel:
        return jsonify({"message": "Parcel not found"}), 404

    db.session.delete(parcel)
    db.session.commit()
    return jsonify({"message": "Parcel deleted successfully"}), 200
