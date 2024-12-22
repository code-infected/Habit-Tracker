# Habit Tracker & Motivator

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [System Architecture](#system-architecture)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
   - [Frontend](#frontend-installation)
   - [Backend](#backend-installation)
   - [AI Service](#ai-service-installation)
6. [Configuration](#configuration)
7. [Running the Application](#running-the-application)
   - [Development](#development)
   - [Production](#production)
8. [API Documentation](#api-documentation)
9. [Testing](#testing)
10. [Deployment](#deployment)
11. [Monitoring and Logging](#monitoring-and-logging)
12. [Troubleshooting](#troubleshooting)
13. [Contributing](#contributing)
14. [License](#license)

## Introduction

Habit Tracker & Motivator is a comprehensive web application designed to help users create, track, and maintain positive habits. With AI-powered suggestions and an intuitive interface, this app makes it easy for users to develop and stick to new habits, improving their daily lives.

## Features

- User authentication (login/register)
- Create, read, update, and delete habits
- Track habit progress
- Receive AI-powered habit suggestions
- Responsive design for desktop and mobile
- RESTful API for habit management
- AI-powered habit suggestion engine

## System Architecture

The application consists of three main components:
1. **Frontend**: Next.js application
2. **Backend**: Node.js with Express.js
3. **AI Service**: Python Flask application

## Prerequisites

- Node.js (v14 or later)
- Python (v3.8 or later)
- MySQL (v8.0 or later)
- npm (v6 or later)
- pip (v20 or later)

## Installation

### Frontend Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/habit-tracker-motivator.git
   cd habit-tracker-motivator/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Backend Installation
1. Navigate to the backend directory:
   ```bash
   cd ../backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the database:
   ```bash
   mysql -u root -p < database/schema.sql
   ```

### AI Service Installation
1. Navigate to the AI service directory:
   ```bash
   cd ../ai-service
   ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Configuration

1. **Frontend configuration**:
   Create a `.env.local` file in the `frontend` directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

2. **Backend configuration**:
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=habit_tracker
   JWT_SECRET=your_jwt_secret
   ```

3. **AI Service configuration**:
   Create a `.env` file in the `ai-service` directory:
   ```env
   FLASK_APP=app.py
   FLASK_ENV=development
   ```

## Running the Application

### Development
1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```
2. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```
3. Start the AI service:
   ```bash
   cd ai-service
   flask run
   ```

The application will be available at `http://localhost:3000`.

### Production
1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Start the backend server:
   ```bash
   cd backend
   npm start
   ```
3. Serve the frontend build:
   ```bash
   cd frontend
   npm run start
   ```
4. Start the AI service:
   ```bash
   cd ai-service
   gunicorn app:app
   ```

## API Documentation

The backend provides the following RESTful API endpoints:

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Authenticate a user
- `GET /api/habits`: Fetch all habits for the authenticated user
- `POST /api/habits`: Create a new habit
- `PUT /api/habits/:id`: Update an existing habit
- `DELETE /api/habits/:id`: Delete a habit
- `GET /api/suggestions`: Fetch AI-powered habit suggestions

For detailed API documentation, refer to the [API Documentation](API_DOCUMENTATION.md) file.

## Testing

1. **Frontend tests**:
   ```bash
   cd frontend
   npm test
   ```
2. **Backend tests**:
   ```bash
   cd backend
   npm test
   ```
3. **AI Service tests**:
   ```bash
   cd ai-service
   python -m pytest
   ```

## Deployment

1. Set up a production MySQL database.
2. Configure environment variables for production.
3. Deploy the backend to a Node.js hosting service (e.g., Heroku, DigitalOcean).
4. Deploy the frontend to a static site hosting service (e.g., Vercel, Netlify).
5. Deploy the AI service to a Python hosting service (e.g., Heroku, PythonAnywhere).

For detailed deployment instructions, refer to the [Deployment Guide](DEPLOYMENT.md).

## Monitoring and Logging

- Use PM2 for process management and monitoring of the Node.js backend.
- Implement application logging using Winston or similar logging libraries.
- Set up error tracking and monitoring using services like Sentry or New Relic.

## Troubleshooting

For common issues and their solutions, refer to the [Troubleshooting Guide](TROUBLESHOOTING.md).

## Contributing

We welcome contributions to the Habit Tracker & Motivator project! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

Please make sure to update tests as appropriate and adhere to the existing coding style.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
