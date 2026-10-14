# 🩸 Blood Donor Management System — Frontend

A web-based Blood Donor Management System designed to provide a simple interface for managing donor information and supporting blood donation activities.

## 📌 Project Overview

The Blood Donor Management System is developed to make donor information easier to organize, search, and manage. The frontend provides the user interface through which users can log in and interact with the donor dashboard.

This repository contains the frontend code. The backend, database connectivity, and server-side operations are maintained separately in the Spring Boot backend project.

## 🎯 Project Objectives

- Provide a simple and user-friendly interface for blood donor management.
- Offer a login page for users.
- Display a dashboard for donor-related operations.
- Make donor information easier to search and organize.
- Connect the frontend with a backend service for data operations.
- Separate frontend and backend code for easier development and maintenance.

## ✨ Features

### 🔐 Login Interface
- Login page for users.
- Username and password input fields.
- User role selection, if enabled in the current implementation.
- Connection to the backend login API.

### 🩸 Donor Dashboard
- Dashboard interface for donor management.
- Display donor records retrieved from the backend.
- Search and filter donor information, where supported by the current implementation.
- Interface for adding, updating, and deleting donor records, where supported by the backend.

### 🔗 Backend Integration
- Designed to communicate with a Spring Boot backend.
- Uses HTTP requests to send and retrieve information from backend API endpoints.
- Uses a MySQL database through the backend for persistent storage.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure of web pages |
| CSS3 | Page styling and layout |
| JavaScript | User interactions and API communication |
| Spring Boot | Backend application |
| Java | Backend programming language |
| MySQL | Database management |
| Git and GitHub | Version control and source code hosting |

## 📂 Project Structure

```text
blood-donor-frontend/
├── index.html
├── login.html
└── README.md
```

- **`login.html`** — Provides the login interface.
- **`index.html`** — Provides the donor dashboard interface.
- **`README.md`** — Contains project documentation and setup information.

## ⚙️ Prerequisites

To use the complete application, you need:

- A modern web browser, such as Google Chrome, Microsoft Edge, or Firefox.
- The Blood Donor Management System backend built with Spring Boot.
- MySQL configured for the backend.
- Java and Maven to run the backend, according to its project configuration.

## 🚀 How to Run the Frontend

### Option 1: Open the HTML files directly

1. Clone or download this repository.
2. Open the downloaded project folder.
3. Open `login.html` in your browser.

**Note:** Some features may not work correctly when opening HTML files directly because API requests require a running backend.

### Option 2: Run through the Spring Boot backend

1. Set up and start MySQL.
2. Configure the backend database connection.
3. Start the Spring Boot backend.
4. Open the application in your browser at:

   `http://localhost:8081/login.html`

The backend serves the frontend files from its static resources folder in the current local setup.

## 🔌 Backend Integration

The frontend is designed to work with the separate Spring Boot backend.

The backend is responsible for:
- Processing login requests.
- Managing donor information.
- Communicating with the MySQL database.
- Handling donor record operations through API endpoints.

For the complete application, configure the frontend API requests to use the correct backend URL.

## 🗄️ Database

The application uses MySQL through the backend to store application data, including donor-related information and user account details.

Database setup and configuration are maintained in the backend repository. Database credentials should be kept private and should never be committed to a public repository.

## 🔒 Security and Privacy

- Do not publish database passwords, account passwords, API keys, or other secrets.
- Avoid uploading real donor personal information to GitHub.
- Login interfaces alone do not provide complete application security; authentication and authorization must be enforced by the backend.
- Handle donor information responsibly and protect personal data.

## 🔮 Future Improvements

- Improve responsive design for mobile and desktop screens.
- Add form validation and clearer error messages.
- Improve accessibility and navigation.
- Connect the frontend to a deployed backend.
- Add secure authentication and role-based access control.
- Improve donor search and filtering options.
- Add documentation and testing for application features.

## 📌 Project Status

**Status:** Academic project — under development.

Features and setup instructions may change as development continues.

## 👩‍💻 Author

**Harshitha**


