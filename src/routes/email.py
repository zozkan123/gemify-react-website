from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import logging
import os
from datetime import datetime

email_bp = Blueprint('email', __name__)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def send_email(to_email, subject, body, html_body=None, from_email="info@gemifyandco.com"):
    """
    Send email using SMTP. For production, configure with real SMTP settings.
    For demo purposes, this will log the email content.
    """
    try:
        # For demonstration purposes, we'll log the email instead of actually sending it
        # In production, you would configure with real SMTP settings like Gmail, SendGrid, etc.
        logger.info(f"Email would be sent:")
        logger.info(f"From: {from_email}")
        logger.info(f"To: {to_email}")
        logger.info(f"Subject: {subject}")
        logger.info(f"Body: {body}")
        if html_body:
            logger.info(f"HTML Body: {html_body}")
        
        # Uncomment and configure the following for production use:
        """
        # Example Gmail SMTP configuration
        smtp_server = "smtp.gmail.com"
        smtp_port = 587
        smtp_username = "your-email@gmail.com"
        smtp_password = "your-app-password"
        
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = from_email
        msg['To'] = to_email
        
        # Add text part
        text_part = MIMEText(body, 'plain')
        msg.attach(text_part)
        
        # Add HTML part if provided
        if html_body:
            html_part = MIMEText(html_body, 'html')
            msg.attach(html_part)
        
        # Send email
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_username, smtp_password)
        server.send_message(msg)
        server.quit()
        """
        
        # Return success for demonstration
        return True
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False

def create_newsletter_welcome_email(email):
    """Create a beautiful welcome email for newsletter subscribers"""
    html_template = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Gemify & Co. Newsletter</title>
        <style>
            body {{
                font-family: 'Georgia', serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f8f9fa;
            }}
            .container {{
                background-color: white;
                border-radius: 10px;
                padding: 40px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }}
            .header {{
                text-align: center;
                margin-bottom: 30px;
            }}
            .logo {{
                font-size: 28px;
                font-weight: bold;
                color: #D4AF37;
                margin-bottom: 10px;
            }}
            .tagline {{
                color: #666;
                font-style: italic;
                margin-bottom: 30px;
            }}
            .content {{
                margin-bottom: 30px;
            }}
            .highlight {{
                background-color: #fff8dc;
                padding: 20px;
                border-left: 4px solid #D4AF37;
                margin: 20px 0;
            }}
            .footer {{
                text-align: center;
                color: #666;
                font-size: 14px;
                border-top: 1px solid #eee;
                padding-top: 20px;
                margin-top: 30px;
            }}
            .social-links {{
                margin: 20px 0;
            }}
            .social-links a {{
                color: #D4AF37;
                text-decoration: none;
                margin: 0 10px;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">Gemify & Co.</div>
                <div class="tagline">Every Gem Tells A Story, Let Yours Shine</div>
            </div>
            
            <div class="content">
                <h2 style="color: #D4AF37;">Welcome to Our Exclusive Community!</h2>
                
                <p>Dear Gemstone Enthusiast,</p>
                
                <p>Thank you for subscribing to the Gemify & Co. newsletter! We're thrilled to welcome you to our exclusive community of gemstone lovers and collectors.</p>
                
                <div class="highlight">
                    <h3 style="margin-top: 0; color: #D4AF37;">What to Expect:</h3>
                    <ul>
                        <li>ðŸ”¸ Exclusive access to rare and exceptional gemstones</li>
                        <li>ðŸ”¸ Expert insights and gemstone education</li>
                        <li>ðŸ”¸ Early notifications about new arrivals</li>
                        <li>ðŸ”¸ Special offers and private sales</li>
                        <li>ðŸ”¸ Behind-the-scenes stories from the world of gemstones</li>
                    </ul>
                </div>
                
                <p>As a valued subscriber, you'll be the first to know about our latest acquisitions, including rare sapphires from Kashmir, legendary Burmese rubies, and other extraordinary gemstones from around the world.</p>
                
                <p>Our team of expert gemologists carefully curates each piece in our collection, ensuring that every gemstone meets our highest standards of quality, authenticity, and beauty.</p>
                
                <p>If you have any questions or would like to schedule a private consultation, please don't hesitate to reach out to us at <a href="mailto:info@gemifyandco.com" style="color: #D4AF37;">info@gemifyandco.com</a> or call us at <a href="tel:+94742068566" style="color: #D4AF37;">+94 74 206 8566</a>.</p>
            </div>
            
            <div class="footer">
                <div class="social-links">
                    <a href="https://facebook.com/gemifyandco">Facebook</a>
                    <a href="https://instagram.com/gemifyandco">Instagram</a>
                </div>
                
                <p>Gemify & Co.<br>
                By Appointment Only<br>
                Monday - Saturday, 9:00 AM - 6:00 PM (Sri Lanka Time)</p>
                
                <p style="font-size: 12px; color: #999;">
                    You received this email because you subscribed to our newsletter at gemifyandco.com<br>
                    Â© 2025 Gemify & Co. All rights reserved.
                </p>
            </div>
        </div>
    </body>
    </html>
    """
    
    text_version = f"""
    Welcome to Gemify & Co. Newsletter!
    
    Dear Gemstone Enthusiast,
    
    Thank you for subscribing to the Gemify & Co. newsletter! We're thrilled to welcome you to our exclusive community of gemstone lovers and collectors.
    
    What to Expect:
    - Exclusive access to rare and exceptional gemstones
    - Expert insights and gemstone education
    - Early notifications about new arrivals
    - Special offers and private sales
    - Behind-the-scenes stories from the world of gemstones
    
    As a valued subscriber, you'll be the first to know about our latest acquisitions, including rare sapphires from Kashmir, legendary Burmese rubies, and other extraordinary gemstones from around the world.
    
    Our team of expert gemologists carefully curates each piece in our collection, ensuring that every gemstone meets our highest standards of quality, authenticity, and beauty.
    
    If you have any questions or would like to schedule a private consultation, please don't hesitate to reach out to us at info@gemifyandco.com or call us at +94 74 206 8566.
    
    Best regards,
    The Gemify & Co. Team
    
    ---
    Gemify & Co.
    By Appointment Only
    Monday - Saturday, 9:00 AM - 6:00 PM (Sri Lanka Time)
    
    You received this email because you subscribed to our newsletter at gemifyandco.com
    Â© 2025 Gemify & Co. All rights reserved.
    """
    
    return text_version, html_template

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
        timestamp = data.get('timestamp', datetime.now().isoformat())
        
        # Create email content
        email_subject = f"New Contact Form Submission: {subject}"
        email_body = f"""
New contact form submission from Gemify & Co. website:

Name: {name}
Email: {email}
Phone: {phone}
Subject: {subject}
Submitted: {timestamp}

Message:
{message}

---
This message was sent from the Gemify & Co. contact form.
Please respond to the customer at: {email}
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
        
        # Validate email format
        import re
        email_pattern = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
        if not re.match(email_pattern, email):
            return jsonify({'error': 'Please enter a valid email address'}), 400
        
        timestamp = data.get('timestamp', datetime.now().isoformat())
        
        # Create subscription notification email for admin
        admin_subject = "New Newsletter Subscription - Gemify & Co."
        admin_body = f"""
New newsletter subscription from Gemify & Co. website:

Email: {email}
Subscription Date: {timestamp}

---
This notification was sent from the Gemify & Co. newsletter subscription form.
        """
        
        # Send notification to website owner
        admin_success = send_email(
            to_email="info@gemifyandco.com",
            subject=admin_subject,
            body=admin_body,
            from_email="noreply@gemifyandco.com"
        )
        
        # Create welcome email for subscriber
        welcome_text, welcome_html = create_newsletter_welcome_email(email)
        
        # Send welcome email to subscriber
        welcome_success = send_email(
            to_email=email,
            subject="Welcome to Gemify & Co. - Your Journey into Exceptional Gemstones Begins!",
            body=welcome_text,
            html_body=welcome_html,
            from_email="info@gemifyandco.com"
        )
        
        if admin_success and welcome_success:
            return jsonify({'message': 'Successfully subscribed to newsletter! Check your email for a welcome message.'}), 200
        else:
            return jsonify({'error': 'Failed to subscribe. Please try again.'}), 500
            
    except Exception as e:
        logger.error(f"Error in subscription: {str(e)}")
        return jsonify({'error': 'An error occurred. Please try again.'}), 500

