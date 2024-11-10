# utils.py

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from flask import current_app
import random
import string
import logging

# Initialize logger
logger = logging.getLogger(__name__)

def send_email(to_email, subject, body, html_body=None):
    """Sends an email to the specified recipient."""
    try:
        # Set up the email server
        smtp_host = current_app.config.get("SMTP_HOST")
        smtp_port = current_app.config.get("SMTP_PORT")
        smtp_user = current_app.config.get("SMTP_USER")
        smtp_pass = current_app.config.get("SMTP_PASS")
        sender_email = current_app.config.get("MAIL_DEFAULT_SENDER")

        # Create the email
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = to_email
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain'))
        if html_body:
            msg.attach(MIMEText(html_body, 'html'))

        # Connect to SMTP server and send the email
        server = smtplib.SMTP(smtp_host, smtp_port)
        server.starttls()
        server.login(smtp_user, smtp_pass)
        server.sendmail(sender_email, to_email, msg.as_string())
        server.quit()
        
        logger.info(f"Email sent to {to_email}")
    except Exception as e:
        logger.error(f"Failed to send email to {to_email}: {e}")

def generate_random_string(length=12):
    """Generates a random alphanumeric string of specified length."""
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

def is_valid_email(email):
    """Simple email validation function."""
    import re
    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(email_regex, email) is not None

def configure_logger():
    """Configures the logger for the application."""
    logger.setLevel(logging.INFO)
    handler = logging.StreamHandler()
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    handler.setFormatter(formatter)
    logger.addHandler(handler)

# Example utility function for formatting currency (e.g., for order totals)
def format_currency(value):
    """Formats a float as currency."""
    return "${:,.2f}".format(value)
