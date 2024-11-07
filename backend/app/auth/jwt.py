# /backend/app/auth/jwt.py
import jwt
import datetime
from flask import current_app

def create_access_token(email):
    """Create a new JWT token for the user"""
    expiration = datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    payload = {
        'email': email,
        'exp': expiration
    }
    token = jwt.encode(payload, current_app.config['JWT_SECRET_KEY'], algorithm='HS256')
    return token

def decode_token(token):
    """Decode JWT token to retrieve payload"""
    try:
        payload = jwt.decode(token, current_app.config['JWT_SECRET_KEY'], algorithms=['HS256'])
        return payload
    except jwt.ExpiredSignatureError:
        return None  # Token has expired
    except jwt.InvalidTokenError:
        return None  # Invalid token
