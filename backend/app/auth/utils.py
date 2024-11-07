# /backend/app/auth/utils.py

from flask_mail import Message
from flask import current_app
from . import mail

def send_confirmation_email(email):
    """Send account confirmation email"""
    subject = "Confirm your account"
    recipients = [email]
    body = "Please confirm your account by clicking on the link below."

    # Create a Message object and send email
    msg = Message(subject, recipients=recipients)
    msg.body = body

    try:
        mail.send(msg)
        print(f"Confirmation email sent to {email}")
    except Exception as e:
        print(f"Error sending email: {e}")
