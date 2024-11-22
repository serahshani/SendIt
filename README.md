SendIT - Courier Service Application
SendIT is a web application that simplifies parcel delivery services by allowing users to create, track, and manage delivery orders with ease. The platform features real-time tracking, notifications, and administrative controls.

FEATURES
User Features:
Authentication: Users can register and log in to their accounts.

Parcel Management:
  Create parcel delivery orders.
  Update delivery destinations (if undelivered).
  Cancel delivery orders (if undelivered).
  View delivery order details.

Notifications: Get email notifications for status and location updates.

Google Maps Integration:
  Visualize pickup and delivery locations.
  View travel routes and calculate distances.

Admin Features
  Update parcel status (e.g., "In Transit," "Delivered").
  Update the current location of a parcel.
  Manage parcel delivery records.

Technologies Used:
BACKEND 
   Framework: Flask
   Database: PostgreSQL
   Migrations: Flask-Migrate
  Email Notifications: Flask-Mail
  API Integration: Google Maps API
FRONTEND
  Framework: React.js
  State Management: Redux Toolkit
  Styling: CSS/SCSS

Setup Instructions
Prerequisites
Ensure you have the following installed:
  Python 3.9+
  Node.js 16+
  PostgreSQL
  Git

BACKEND SETUP:
   Clone the Repository:
      git clone https://github.com/yourusername/sendit.git
       cd sendit/backend

CREATE A VIRTUAL ENVIRONMENT:
  bash
  Copy code
  python3 -m venv venv
  source venv/bin/activate
  
Install Dependencies:
  bash
  Copy code
  pip install -r requirements.txt

Run Database Migrations:
  bash
  Copy code
  flask db init
  flask db migrate -m "Initial migration"
  flask db upgrade

Run the Backend Server:
  bash
  Copy code
  flask run


FRONTEND SETUP:
Navigate to the Frontend Folder:
  cd ../frontend
  
Install Dependencies:
  npm install
  
Start the React Development Server:
  npm start


CONTRIBUTION:
We welcome contributions! To contribute:
Fork the repository.
Create a new branch for your feature:
  git checkout -b feature-name
Commit and push your changes:
  git commit -m "Description of your changes"
  git push origin feature-name
  Open a Pull Request for review.



























  
