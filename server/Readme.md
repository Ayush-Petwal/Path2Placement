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

### Course Routes

#### Create Course

- **Endpoint:** `/api/v1/course`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
        "courseTitle": "Fullstack Development",
        "category": "Web Development"
    }
    ```
- **Response:**
    ```json
    {
        "course": {
            "_id": "course_id",
            "courseTitle": "Fullstack Development",
            "category": "Web Development",
            "creator": "user_id"
        },
        "message": "Course created."
    }
    ```

#### Search Course

- **Endpoint:** `/api/v1/course/search`
- **Method:** `GET`
- **Query Parameters:**
    - `query`: Search term
    - `categories`: Array of categories
    - `sortByPrice`: Sorting order (low/high)
- **Response:**
    ```json
    {
        "success": true,
        "courses": [
            {
                "_id": "course_id",
                "courseTitle": "Fullstack Development",
                "category": "Web Development",
                "creator": {
                    "name": "John Doe",
                    "photoUrl": "https://example.com/image.jpg"
                }
            }
        ]
    }
    ```

#### Get Published Courses

- **Endpoint:** `/api/v1/course/published-courses`
- **Method:** `GET`
- **Response:**
    ```json
    {
        "courses": [
            {
                "_id": "course_id",
                "courseTitle": "Fullstack Development",
                "category": "Web Development",
                "creator": {
                    "name": "John Doe",
                    "photoUrl": "https://example.com/image.jpg"
                }
            }
        ]
    }
    ```

#### Edit Course

- **Endpoint:** `/api/v1/course/:courseId`
- **Method:** `PUT`
- **Request Body:**
    - `courseTitle`: Updated course title
    - `subTitle`: Updated course subtitle
    - `description`: Updated course description
    - `category`: Updated course category
    - `courseLevel`: Updated course level
    - `coursePrice`: Updated course price
    - `courseThumbnail`: Updated course thumbnail (file)
- **Response:**
    ```json
    {
        "course": {
            "_id": "course_id",
            "courseTitle": "Updated Fullstack Development",
            "subTitle": "Updated subtitle",
            "description": "Updated description",
            "category": "Updated category",
            "courseLevel": "Updated level",
            "coursePrice": "Updated price",
            "courseThumbnail": "https://cloudinary.com/updated-thumbnail.jpg"
        },
        "message": "Course updated successfully."
    }
    ```

#### Toggle Publish Course

- **Endpoint:** `/api/v1/course/:courseId`
- **Method:** `PATCH`
- **Query Parameters:**
    - `publish`: `true` or `false`
- **Response:**
    ```json
    {
        "message": "Course is Published"
    }
    ```

### Media Routes

#### Upload Video

- **Endpoint:** `/api/v1/media/upload-video`
- **Method:** `POST`
- **Content Type:** `multipart/form-data`
- **Request Body:**
    - `file`: Video file to upload
- **Response:**
    ```json
    {
        "success": true,
        "message": "File uploaded successfully.",
        "data": {
            "public_id": "media_id",
            "secure_url": "https://cloudinary.com/video.mp4"
        }
    }
    ```

## Project Structure

- `index.js`: Entry point of the server.
- `database/db.js`: Database connection setup.
- `models/user.model.js`: User model schema.
- `models/course.model.js`: Course model schema.
- `models/lecture.model.js`: Lecture model schema for course content.
- `routes/user.route.js`: User-related routes.
- `routes/course.route.js`: Course-related routes.
- `routes/media.route.js`: Media upload and management routes.
- `controllers/user.controller.js`: User-related controllers.
- `controllers/course.controller.js`: Course-related controllers.
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

### Create Course Example

```bash
curl -X POST http://localhost:8080/api/v1/course \
-H "Content-Type: application/json" \
-d '{
    "courseTitle": "Fullstack Development",
    "category": "Web Development"
}'
```

### Search Course Example

```bash
curl -X GET "http://localhost:8080/api/v1/course/search?query=fullstack&categories=Web%20Development&sortByPrice=low"
```

### Edit Course Example

```bash
curl -X PUT http://localhost:8080/api/v1/course/course_id \
-H "Cookie: token=your-jwt-token" \
-F "courseTitle=Updated Fullstack Development" \
-F "subTitle=Updated subtitle" \
-F "description=Updated description" \
-F "category=Updated category" \
-F "courseLevel=Updated level" \
-F "coursePrice=Updated price" \
-F "courseThumbnail=@/path/to/thumbnail.jpg"
```

### Toggle Publish Course Example

```bash
curl -X PATCH "http://localhost:8080/api/v1/course/course_id?publish=true"
```

### Upload Video Example

```bash
curl -X POST http://localhost:8080/api/v1/media/upload-video \
-H "Cookie: token=your-jwt-token" \
-F "file=@/path/to/video.mp4"
```
