# /backend/app/__init__.py

from flask import Flask
from flask_mail import Mail

# Initialize the Flask app
app = Flask(__name__)

# Set up the configuration for Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # or your SMTP server
app.config['MAIL_PORT'] = 587  # Typically 587 for TLS or 465 for SSL
app.config['MAIL_USE_TLS'] = True  # Use TLS encryption
app.config['MAIL_USE_SSL'] = False  # You can choose SSL based on your server settings
app.config['MAIL_USERNAME'] = 'your-email@gmail.com'  # Replace with your email
app.config['MAIL_PASSWORD'] = 'your-email-password'  # Replace with your email password (or app-specific password)
app.config['MAIL_DEFAULT_SENDER'] = 'your-email@gmail.com'  # The default sender address for all emails
app.config['MAIL_MAX_EMAILS'] = None  # Set the limit for the maximum number of emails
app.config['MAIL_ASCII_ATTACHMENTS'] = False  # Whether or not to allow ASCII attachments

# Initialize Flask-Mail
mail = Mail(app)
