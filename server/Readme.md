# Path2Placement Server

## Overview

This server is built using Node.js, Express, and MongoDB. It handles user authentication, registration, profile management, and other backend functionalities.

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

#### Logout User

- **Endpoint:** `/api/v1/user/logout`
- **Method:** `GET`
- **Response:**
    ```json
    {
        "success": true,
        "message": "Logged out successfully."
    }
    ```

#### Get User Profile

- **Endpoint:** `/api/v1/user/profile`
- **Method:** `GET`
- **Authentication:** Required (JWT token in cookie)
- **Response:**
    ```json
    {
        "success": true,
        "user": {
            "_id": "user_id",
            "name": "John Doe",
            "email": "john@example.com",
            "photoUrl": "https://example.com/image.jpg",
            "role": "student",
            "enrolledCourses": []
        }
    }
    ```

#### Update User Profile

- **Endpoint:** `/api/v1/user/profile/update`
- **Method:** `PUT`
- **Authentication:** Required (JWT token in cookie)
- **Content Type:** `multipart/form-data`
- **Request Body:**
    - `name`: User's new name (text)
    - `profilePhoto`: User's profile image (file)
- **Response:**
    ```json
    {
        "success": true,
        "message": "Profile updated successfully.",
        "user": {
            "_id": "user_id",
            "name": "Updated Name",
            "email": "john@example.com",
            "photoUrl": "https://cloudinary.com/updated-image.jpg",
            "role": "student"
        }
    }
    ```

## Project Structure

- `index.js`: Entry point of the server.
- `database/db.js`: Database connection setup.
- `models/user.model.js`: User model schema.
- `routes/user.route.js`: User-related routes.
- `controllers/user.controller.js`: User-related controllers.
- `middlewares/isAuthenticated.js`: Authentication middleware to protect routes.
- `utils/generateToken.js`: Utility function to generate JWT tokens.
- `utils/cloudinary.js`: Utilities for Cloudinary media management.
- `utils/multer.js`: Configuration for file upload handling.

## Media Handling

The application uses:
- **Multer**: For handling multipart/form-data and file uploads
- **Cloudinary**: For cloud-based media storage and management

### Media Operations

- **Upload Media**: Files are first saved temporarily with Multer, then uploaded to Cloudinary
- **Delete Media**: When a user updates their profile photo, the old one is automatically deleted from Cloudinary
- **Media Types**: The system supports various media types including images and videos

## Authentication Flow

1. User registers or logs in
2. Server generates a JWT token and sets it as an HTTP-only cookie
3. For protected routes, the `isAuthenticated` middleware verifies the token
4. On logout, the token cookie is cleared

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

### Update Profile Example

```bash
curl -X PUT http://localhost:8080/api/v1/user/profile/update \
-H "Cookie: token=your-jwt-token" \
-F "name=Updated Name" \
-F "profilePhoto=@/path/to/image.jpg"
```
