# /backend/app/auth/routes.py

from flask import Blueprint, request, jsonify
from .utils import send_confirmation_email

auth_bp = Blueprint('auth_bp', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    """Register a new user"""
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Here, you'd typically save the user in the database
    # For simplicity, just simulate a registration process

    send_confirmation_email(email)  # Send confirmation email

    return jsonify(message="Registration successful, check your email for confirmation"), 201
