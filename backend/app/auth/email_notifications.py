# /backend/app/auth/email_notifications.py

from flask_mail import Message
from flask import current_app
from utils import mail
import logging

# Configure logging for the module
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def send_email(subject, recipients, body, html_body=None):
    """Send an email with the specified subject and body."""
    msg = Message(
        subject=subject,
        recipients=recipients,
        body=body,
        html=html_body,
        sender=current_app.config.get("MAIL_DEFAULT_SENDER")
    )

    try:
        mail.send(msg)
        logger.info(f"Email sent to {recipients}")
    except Exception as e:
        logger.error(f"Failed to send email to {recipients}: {e}")

def create_email_body(parcel_id, user_email, update_type, update_info):
    """Create both plain text and HTML body for different types of updates."""
    if update_type == 'status':
        subject = "Update on Your Parcel Delivery Status"
        body = (
            f"Dear User,\n\n"
            f"The status of your parcel with ID {parcel_id} has been updated to: {update_info}.\n"
            f"Check the latest status by logging into your account.\n\n"
            f"Thank you for using SendIT!"
        )
        html_body = (
            f"<p>Dear User,</p>"
            f"<p>The status of your parcel with ID <strong>{parcel_id}</strong> has been updated to: "
            f"<strong>{update_info}</strong>.</p>"
            f"<p>Check the latest status by logging into your account.</p>"
            f"<p>Thank you for using <strong>SendIT</strong>!</p>"
        )
    elif update_type == 'location':
        subject = "Update on Your Parcel's Location"
        body = (
            f"Dear User,\n\n"
            f"The location of your parcel with ID {parcel_id} is now: {update_info}.\n"
            f"Track your parcel in real-time by logging into your account.\n\n"
            f"Thank you for using SendIT!"
        )
        html_body = (
            f"<p>Dear User,</p>"
            f"<p>The location of your parcel with ID <strong>{parcel_id}</strong> has been updated to: "
            f"<strong>{update_info}</strong>.</p>"
            f"<p>Track your parcel in real-time by logging into your account.</p>"
            f"<p>Thank you for using <strong>SendIT</strong>!</p>"
        )
    else:
        logger.error(f"Unknown update type '{update_type}' for parcel ID {parcel_id}")
        return None, None, None  # No valid email content for an unknown update type

    return subject, body, html_body

def send_status_update_email(user_email, parcel_id, new_status):
    """Send an email when the status of a parcel is updated."""
    subject, body, html_body = create_email_body(parcel_id, user_email, 'status', new_status)
    if subject:
        send_email(subject, [user_email], body, html_body)

def send_location_update_email(user_email, parcel_id, new_location):
    """Send an email when the location of a parcel is updated."""
    subject, body, html_body = create_email_body(parcel_id, user_email, 'location', new_location)
    if subject:
        send_email(subject, [user_email], body, html_body)
        
