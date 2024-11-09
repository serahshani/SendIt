# /backend/app/__init__.py

from flask import Flask
from flask_mail import Mail
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Initialize extensions
db = SQLAlchemy()
mail = Mail()

def create_app():
    """Factory function to create and configure the Flask app."""
    app = Flask(__name__)
    
    # Load configurations from a config file or environment variables
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/senditdb'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USERNAME'] = 'your-email@gmail.com'
    app.config['MAIL_PASSWORD'] = 'your-email-password'
    app.config['MAIL_DEFAULT_SENDER'] = 'your-email@gmail.com'
    
    # Initialize extensions with the app instance
    db.init_app(app)
    mail.init_app(app)
    CORS(app)  # Enable CORS if your frontend is hosted on a different origin

    # Register Blueprints
    from .auth import auth as auth_blueprint
    auth_blueprint.init_app(app)
    
    # Register other blueprints or modules here as needed
    # from .parcel import parcel as parcel_blueprint
    # app.register_blueprint(parcel_blueprint, url_prefix='/parcels')

    # Initialize database tables if necessary
    with app.app_context():
        db.create_all()  # Only for development/testing; in production use migrations

    return app
