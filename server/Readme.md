# PlacementPathPilot Server

## Overview

This server is built using Node.js and Express. It handles the backend functionalities of the PlacementPathPilot application, including user authentication, course management, media uploads, payment processing, and course progress tracking.

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

3. **Create a `.env` file in the root directory and configure the following environment variables:**
    ```properties
    MONGO_URI=<your_mongodb_connection_string>
    PORT=8080
    SECRET_KEY=<your_secret_key>
    FRONTEND_URL=http://localhost:5173

    # Cloudinary setup
    CLOUDINARY_NAME=<your_cloudinary_name>
    CLOUDINARY_API_KEY=<your_cloudinary_api_key>
    CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>

    # Stripe setup
    STRIPE_SECRET_KEY=<your_stripe_secret_key>
    STRIPE_PUBLISHABLE_KEY=<your_stripe_publishable_key>
    ```

4. **Start the server:**
    ```bash
    npm run dev
    ```

## Project Structure

- `index.js`: Entry point of the server application.
- `database/db.js`: MongoDB connection setup.
- `routes`: Contains all the route files for different functionalities.
- `controllers`: Contains the logic for handling requests and responses.
- `models`: Mongoose models for MongoDB collections.
- `utils`: Utility functions for tasks like file uploads and token generation.
- `middlewares`: Middleware functions for authentication and other purposes.

## Features

### User Management

- **Register User**: Create a new user account.
- **Login User**: Authenticate a user and generate a token.
- **Logout User**: Clear the authentication token.
- **Get User Profile**: Fetch the profile of the logged-in user.
- **Update Profile**: Update user details and profile photo.

### Course Management

- **Create Course**: Instructors can create new courses.
- **Edit Course**: Update course details and thumbnail.
- **Search Courses**: Search for published courses by title, category, or price.
- **Get Published Courses**: Fetch all published courses.
- **Manage Lectures**: Add, edit, or remove lectures in a course.

### Media Uploads

- **Cloudinary Integration**: Upload and manage media files (images and videos) using Cloudinary.
- **Multer Integration**: Handle file uploads from the client.

### Payment Processing

- **Stripe Integration**: Handle payments for course purchases.
- **Create Checkout Session**: Generate a Stripe checkout session for purchasing courses.
- **Stripe Webhooks**: Handle payment success events and update course access.

### Course Progress

- **Track Progress**: Track lecture completion status for enrolled courses.
- **Mark Course as Completed**: Allow users to mark a course as completed.
- **Mark Course as Incomplete**: Reset course progress to incomplete.

## Example API Endpoints

### User Routes

- `POST /api/v1/user/register`: Register a new user.
- `POST /api/v1/user/login`: Login a user.
- `GET /api/v1/user/logout`: Logout a user.
- `GET /api/v1/user/profile`: Get the logged-in user's profile.
- `PUT /api/v1/user/profile/update`: Update the user's profile.

### Course Routes

- `POST /api/v1/course`: Create a new course.
- `GET /api/v1/course/search`: Search for courses.
- `PUT /api/v1/course/:courseId`: Edit a course.
- `POST /api/v1/course/:courseId/lecture`: Add a lecture to a course.

### Media Routes

- `POST /api/v1/media/upload-video`: Upload a video file.

### Purchase Routes

- `POST /api/v1/purchase/checkout/create-checkout-session`: Create a Stripe checkout session.
- `GET /api/v1/purchase/course/:courseId/detail-with-status`: Get course details with purchase status.

### Course Progress Routes

- `GET /api/v1/progress/:courseId`: Get course progress.
- `POST /api/v1/progress/:courseId/lecture/:lectureId/view`: Mark a lecture as viewed.
- `POST /api/v1/progress/:courseId/complete`: Mark a course as completed.
- `POST /api/v1/progress/:courseId/incomplete`: Mark a course as incomplete.

## Updates in the Server Folder

- **Cloudinary Integration**: Added utilities for uploading and deleting media files.
- **Multer Integration**: Configured Multer for handling file uploads.
- **Stripe Integration**: Added payment processing and webhook handling.
- **User Profile Management**: Added functionality to update user profiles with profile photos.
- **Course Management**: Enhanced course and lecture management features.
- **Course Progress Tracking**: Added APIs to track and update course progress, including marking courses as completed or incomplete.
- **Error Handling**: Improved error handling across all controllers.
- **CORS Configuration**: Updated CORS settings to allow requests from the frontend URL.
