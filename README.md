# 📱 iPad Assign API

A lightweight, self-hosted Python/Flask app that lets school districts assign shared-use iPads with custom naming based on school attributes—like building, grade, classroom, and station number.

This project is:
- ✅ **Customizable** via simple config files
- 🔐 **Secure** with Microsoft Graph API credentials stored in a local `.env` file or Replit Secrets
- 🚀 **Deployable** instantly via Replit with no installs
- 👩‍🏫 **Teacher-friendly**, with a web form frontend

---

## 🚀 One-Click Deployment on Replit

Click the button below to launch the project in Replit with zero setup:

[![Run on Replit](https://replit.com/badge/github/justinreeves00/ipad-assign-api)](https://replit.com/new/github/justinreeves00/ipad-assign-api)

> Replace `justinreeves00` with your actual GitHub username before publishing.

---

## 🗂️ Project Structure

```
ipad-assign-api/
├── app.py                  # Flask API backend
├── config.json             # Custom dropdown settings (editable)
├── .env.example            # Example environment variable template
├── requirements.txt        # Python dependencies
├── .replit                 # Replit run command
├── replit.nix              # Replit environment setup
├── templates/
│   └── assign.html         # Web form UI
├── static/
│   └── script.js           # JS to dynamically load dropdowns and post data
```

---

## 🛠️ Setup Instructions (for Replit users)

### 1. Click the Replit button above or import the repo manually

- Replit will clone the repo
- Install the required packages
- Launch your Flask app automatically

### 2. Add your Microsoft Graph API credentials in Replit

Go to the **Secrets** tab in the left sidebar and add:

```
CLIENT_ID       = your-client-id
CLIENT_SECRET   = your-client-secret
TENANT_ID       = your-tenant-id
```

### 3. Customize `config.json`

Edit `config.json` directly in Replit to customize buildings, grades, and classrooms:

```json
{
  "buildings": ["North Campus", "South Campus", "Main"],
  "grades": ["K", "1", "2", "3", "4", "5"],
  "classrooms": ["101", "102", "103", "104"],
  "requireStation": true,
  "defaultStationPrefix": "S"
}
```

---

## 🔗 API Reference

### `POST /assign`

**Payload:**

```json
{
  "serial": "C02ZG02TMD6M",
  "building": "North Campus",
  "grade": "3",
  "classroom": "204",
  "station": "5"
}
```

**Response:**

```json
{
  "message": "Device assigned as North Campus-3th-204-S05",
  "deviceName": "North Campus-3th-204-S05"
}
```

---

## 📬 Questions? Feature Requests?

Feel free to open an issue or reach out if you need help with:
- Microsoft Graph integration
- OAuth authentication
- Enhancing the form UI
- Deploying on another platform
