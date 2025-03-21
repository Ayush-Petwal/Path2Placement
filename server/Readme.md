# PlacementPathPilot Server

## Overview

This server is built using Node.js, Express, and MongoDB. It handles user authentication, registration, and other backend functionalities.

## Setup

1. **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd PlacementPathPilot/server
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```



## Running the Server

To start the server, run:
```bash
npm run dev
```

## API Endpoints

### User Routes

#### Register User

- **Endpoint:** `/api/v1/user/register`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
        "name": "John Doe",
        "email": "john@example.com",
        "password": "password123"
    }
    ```
- **Response:**
    ```json
    {
        "success": true,
        "message": "Account created successfully."
    }
    ```

#### Login User

- **Endpoint:** `/api/v1/user/login`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
        "email": "john@example.com",
        "password": "password123"
    }
    ```
- **Response:**
    ```json
    {
        "success": true,
        "message": "Welcome back John Doe",
        "user": {
            "_id": "user_id",
            "name": "John Doe",
            "email": "john@example.com",
            "photoUrl": ""
        }
    }
    ```

## Project Structure

- `index.js`: Entry point of the server.
- `database/db.js`: Database connection setup.
- `models/user.model.js`: User model schema.
- `routes/user.route.js`: User-related routes.
- `controllers/user.controller.js`: User-related controllers.
- `utils/generateToken.js`: Utility function to generate JWT tokens.

## Example Usage

### Register User Example

```bash
curl -X POST http://localhost:8080/api/v1/user/register \
-H "Content-Type: application/json" \
-d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
}'
```

### Login User Example

```bash
curl -X POST http://localhost:8080/api/v1/user/login \
-H "Content-Type: application/json" \
-d '{
    "email": "john@example.com",
    "password": "password123"
}'
```
