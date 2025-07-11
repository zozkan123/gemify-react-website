from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import logging

email_bp = Blueprint('email', __name__)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def send_email(to_email, subject, body, from_email="info@gemifyandco.com"):
    """
    Send email using a mock SMTP server for demonstration.
    In production, you would configure with real SMTP settings.
    """
    try:
        # For demonstration purposes, we'll log the email instead of actually sending it
        # In production, you would configure with real SMTP settings like Gmail, SendGrid, etc.
        logger.info(f"Email would be sent:")
        logger.info(f"From: {from_email}")
        logger.info(f"To: {to_email}")
        logger.info(f"Subject: {subject}")
        logger.info(f"Body: {body}")
        
        # Return success for demonstration
        return True
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False

@email_bp.route('/contact', methods=['POST'])
@cross_origin()
def send_contact_email():
    """Handle contact form submissions"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        name = data['name']
        email = data['email']
        phone = data.get('phone', 'Not provided')
        subject = data['subject']
        message = data['message']
        
        # Create email content
        email_subject = f"New Contact Form Submission: {subject}"
        email_body = f"""
        New contact form submission from Gemify & Co. website:
        
        Name: {name}
        Email: {email}
        Phone: {phone}
        Subject: {subject}
        
        Message:
        {message}
        
        ---
        This message was sent from the Gemify & Co. contact form.
        """
        
        # Send email to website owner
        success = send_email(
            to_email="info@gemifyandco.com",
            subject=email_subject,
            body=email_body,
            from_email="noreply@gemifyandco.com"
        )
        
        if success:
            return jsonify({'message': 'Message sent successfully!'}), 200
        else:
            return jsonify({'error': 'Failed to send message. Please try again.'}), 500
            
    except Exception as e:
        logger.error(f"Error in contact form: {str(e)}")
        return jsonify({'error': 'An error occurred. Please try again.'}), 500

@email_bp.route('/subscribe', methods=['POST'])
@cross_origin()
def handle_subscription():
    """Handle newsletter subscriptions"""
    try:
        data = request.get_json()
        
        # Validate email
        email = data.get('email')
        if not email:
            return jsonify({'error': 'Email is required'}), 400
        
        # Create subscription notification email
        email_subject = "New Newsletter Subscription - Gemify & Co."
        email_body = f"""
        New newsletter subscription from Gemify & Co. website:
        
        Email: {email}
        Subscription Date: {data.get('timestamp', 'Not provided')}
        
        ---
        This notification was sent from the Gemify & Co. newsletter subscription form.
        """
        
        # Send notification to website owner
        success = send_email(
            to_email="info@gemifyandco.com",
            subject=email_subject,
            body=email_body,
            from_email="noreply@gemifyandco.com"
        )
        
        if success:
            return jsonify({'message': 'Successfully subscribed to newsletter!'}), 200
        else:
            return jsonify({'error': 'Failed to subscribe. Please try again.'}), 500
            
    except Exception as e:
        logger.error(f"Error in subscription: {str(e)}")
        return jsonify({'error': 'An error occurred. Please try again.'}), 500

