from flask import Flask
from flask_jwt_extended import JWTManager

app = Flask(__name__)

# Set a secret key for the app
app.config['JWT_SECRET_KEY'] = 'your-secret-key'

# Initialize the JWTManager
jwt = JWTManager(app)
