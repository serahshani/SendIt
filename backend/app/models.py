from app import db
from datetime import datetime

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

    parcels = db.relationship('Parcel', backref='user', lazy=True)

class Parcel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    weight = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(20), default="Pending")
    destination = db.Column(db.String(200), nullable=False)
    pickup_location = db.Column(db.String(200), nullable=False)
    present_location = db.Column(db.String(200), default="Warehouse")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
