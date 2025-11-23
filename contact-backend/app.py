from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import smtplib
from email.mime.text import MIMEText
    #  Mpesa Payment Route
import requests
import datetime
import base64
from requests.auth import HTTPBasicAuth

app = Flask(__name__)
CORS(app)

# === Website Contact Config ===
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'paulspice850@gmail.com'
app.config['MAIL_PASSWORD'] = 'rdnevwjicncixgan'
app.config['MAIL_DEFAULT_SENDER'] = app.config['MAIL_USERNAME']

mail = Mail(app)

# === Portfolio Contact Config ===
portfolio_mail_settings = {
    'MAIL_SERVER': 'smtp.gmail.com',
    'MAIL_PORT': 587,
    'MAIL_USE_TLS': True,
    'MAIL_USERNAME': 'anderapaul22@gmail.com',       # <-- Second Gmail
    'MAIL_PASSWORD': 'nysoratbdrxmmkab'              # <-- App password for second Gmail
}

# === Website Contact Route ===
@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not name or not email or not message:
        return jsonify({"status": "fail", "message": "All fields are required."}), 400

    try:
        msg = Message(
            subject="📬 New Website Message",
            recipients=[app.config['MAIL_USERNAME']],
            body=f"From: {name} <{email}>\n\n{message}"
        )
        mail.send(msg)
        return jsonify({"status": "success", "message": "Website message sent."})
    except Exception as e:
        print("Website email error:", e)
        return jsonify({"status": "fail", "message": "Failed to send website email."}), 500


# === Portfolio Contact Route (uses smtplib) ===
@app.route('/api/portfolio-contact', methods=['POST'])
def portfolio_contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not name or not email or not message:
        return jsonify({"status": "fail", "message": "All fields are required."}), 400

    try:
        msg = MIMEText(f"From: {name} <{email}>\n\n{message}")
        msg['Subject'] = "📬 New Portfolio Message"
        msg['From'] = portfolio_mail_settings['MAIL_USERNAME']
        msg['To'] = portfolio_mail_settings['MAIL_USERNAME']

        with smtplib.SMTP(portfolio_mail_settings['MAIL_SERVER'], portfolio_mail_settings['MAIL_PORT']) as server:
            server.starttls()
            server.login(portfolio_mail_settings['MAIL_USERNAME'], portfolio_mail_settings['MAIL_PASSWORD'])
            server.sendmail(
                portfolio_mail_settings['MAIL_USERNAME'],
                [portfolio_mail_settings['MAIL_USERNAME']],
                msg.as_string()
            )

        return jsonify({"status": "success", "message": "Portfolio message sent."})
    except Exception as e:
        print("Portfolio email error:", e)
        return jsonify({"status": "fail", "message": "Failed to send portfolio email."}), 500


@app.route('/')
def home():
    return "Flask backend with dual messaging is running!"



@app.route('/api/mpesa_payment', methods=['POST'])
def mpesa_payment():
    if request.method == 'POST':
        # Extract POST Values sent
        amount = request.form['amount']
        phone = request.form['phone']

        # Provide consumer_key and consumer_secret provided by safaricom
        # pass keys
        consumer_key = "GTWADFxIpUfDoNikNGqq1C3023evM6UH"
        consumer_secret = "amFbAoUByPV2rM5A"

        # Authenticate Yourself using above credentials to Safaricom Services, and Bearer Token this is used by safaricom for security identification purposes - Your are given Access
        api_URL = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"  # AUTH URL
        # Provide your consumer_key and consumer_secret
        response = requests.get(api_URL, auth=HTTPBasicAuth(consumer_key, consumer_secret))
        # Get response as Dictionary
        data = response.json()
        # Retrieve the Provide Token
        # Token allows you to proceed with the transaction
        access_token = "Bearer" + ' ' + data['access_token']

        #  GETTING THE PASSWORD
        timestamp = datetime.datetime.today().strftime('%Y%m%d%H%M%S')  # Current Time
        passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'  # Passkey(Safaricom Provided)
        business_short_code = "174379"  # Test Paybile (Safaricom Provided)
        # Combine above 3 Strings to get data variable
        data = business_short_code + passkey + timestamp
        # Encode to Base64
        encoded = base64.b64encode(data.encode())
        password = encoded.decode()

        # BODY OR PAYLOAD
        payload = {
            "BusinessShortCode": "174379",
            "Password":password,
            "Timestamp": timestamp,
            "TransactionType": "CustomerPayBillOnline",
            "Amount": amount,  # use 1 when testing
            "PartyA": phone,  # change to your number
            "PartyB": "174379",
            "PhoneNumber": phone,
            "CallBackURL": "https://coding.co.ke/api/confirm.php",
            "AccountReference": "SokoGarden Online",
            "TransactionDesc": "Payments for Products"
        }

        # POPULAING THE HTTP HEADER, PROVIDE THE TOKEN ISSUED EARLIER
        headers = {
            "Authorization": access_token,
            "Content-Type": "application/json"
        }

        # Specify STK Push  Trigger URL
        url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
        # Create a POST Request to above url, providing headers, payload
        # Below triggers an STK Push to the phone number indicated in the payload and the amount.
        response = requests.post(url, json=payload, headers=headers)
        print(response.text) #
        # Give a Response
        return jsonify({"message": "An MPESA Prompt has been sent to Your Phone, Please Check & Complete Payment"})










# Run the application
# app.run (debug=True)





if __name__ == '__main__':
   app.run(debug=True, port=5090)    