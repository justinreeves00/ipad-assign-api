# 📱 iPad Assign API

A lightweight, self-hosted Python/Flask app that lets school districts assign shared-use iPads with custom naming based on school attributes—like building, grade, classroom, and station number.

This project is:
- ✅ **Customizable** via simple config files
- 🔐 **Secure** with Microsoft Graph API credentials stored in a local `.env` file
- 🚀 **Deployable** on Replit, Render, or anywhere Flask apps run
- 👩‍🏫 **Teacher-friendly**, with a web form frontend

---

## 🗂️ Project Structure

```
ipad-assign-api/
├── app.py                  # Flask API backend
├── config.json             # Custom dropdown settings (editable)
├── .env.example            # Example environment variable template
├── requirements.txt        # Python dependencies
├── templates/
│   └── assign.html         # Web form UI
├── static/
│   └── script.js           # JS to dynamically load dropdowns and post data
```

---

## 🛠️ Setup Instructions

### 1. Clone this repo

```bash
git clone https://github.com/YOUR_USERNAME/ipad-assign-api.git
cd ipad-assign-api
```

---

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

If you're using Replit or Render, this is handled automatically.

---

### 3. Configure your environment variables

Copy `.env.example` to `.env` and add your **Microsoft Graph API credentials**:

```bash
cp .env.example .env
```

Edit `.env`:

```env
CLIENT_ID=your-client-id
CLIENT_SECRET=your-client-secret
TENANT_ID=your-tenant-id
```

---

### 4. Customize `config.json`

Define dropdown options for your school:

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

### 5. Run the app

```bash
python app.py
```

Visit [http://localhost:5000](http://localhost:5000) to view the assignment form.

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

## 🌐 Deploy Anywhere

### ✅ [Replit](https://replit.com/)
1. Import the GitHub repo
2. Set `.env` secrets via the **Secrets** tab
3. Click **Run**

### ✅ [Render](https://render.com/)
1. New Web Service → Connect your GitHub repo
2. Environment: Python 3
3. Start command: `python app.py`
4. Set your environment variables under **Environment Settings**

---

## 🔐 Microsoft Graph Integration (coming soon)
This project is ready to connect with Microsoft Graph to:
- Rename iPads via their serial number
- Assign group tags or device categories
- Automate MDM setup flows

---

## 📬 Questions? Feature Requests?

Feel free to open an issue or reach out if you need help with:
- Microsoft Graph integration
- OAuth authentication
- Enhancing the form UI
- Deploying on another platform
