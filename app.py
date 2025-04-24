from flask import Flask, request, jsonify, render_template
import json
import os
from dotenv import load_dotenv

app = Flask(__name__)
load_dotenv()

# Load configuration
with open('config.json') as config_file:
    config = json.load(config_file)

@app.route('/')
def index():
    return render_template('assign.html')

@app.route('/config')
def get_config():
    return jsonify(config)

@app.route('/assign', methods=['POST'])
def assign():
    data = request.json
    serial = data.get('serial')
    building = data.get('building')
    grade = data.get('grade')
    classroom = data.get('classroom')
    station = data.get('station')

    device_name = f"{building}-{grade}th-{classroom}-S{str(station).zfill(2)}"

    # Placeholder for Microsoft Graph API integration
    # Use CLIENT_ID, CLIENT_SECRET, TENANT_ID from environment variables

    return jsonify({
        "message": f"Device assigned as {device_name}",
        "deviceName": device_name
    })

if __name__ == '__main__':
    app.run(debug=True)
