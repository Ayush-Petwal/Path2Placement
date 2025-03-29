# PlacementPathPilot Client

## Overview

This client is built using React and Vite. It handles the frontend functionalities of the PlacementPathPilot application.

## Setup

1. **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd PlacementPathPilot/client
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Ensure the backend server is running and the `.env` file is correctly configured.**

## Running the Client

To start the client, run:
```bash
npm run dev
```

## Project Structure

- `src/main.jsx`: Entry point of the client application.
- `src/App.jsx`: Main application component with routing setup.
- `src/pages`: Contains all the pages, including `Login`, `Profile`, `CourseProgress`, and admin-related pages.
- `src/components`: Reusable UI components such as `Button`, `Card`, `Tabs`, `Input`, and more.
- `src/features`: Contains Redux slices and API integrations using Redux Toolkit Query.
- `src/lib/utils.js`: Utility functions.
- `src/index.css`: Tailwind CSS configuration and custom styles.

## Example Usage

### Login Page

The login page allows users to register and login.

#### Register User

1. Navigate to the login page.
2. Fill in the registration form with name, email, and password.
3. Click the "Signup" button.

#### Login User

1. Navigate to the login page.
2. Fill in the login form with email and password.
3. Click the "Login" button.

### Profile Page

The profile page allows users to view and update their profile.

#### Update Profile

1. Navigate to the profile page.
2. Click the "Edit Profile" button.
3. Update the name or upload a new profile photo.
4. Click "Save Changes" to update the profile.

### Course Progress Page

The course progress page allows users to track their progress in a course.

#### Mark Lecture as Viewed

1. Select a lecture from the sidebar.
2. Watch the lecture video to mark it as viewed.

#### Mark Course as Completed

1. Click the "Mark as completed" button to mark the course as completed.

## Tailwind CSS

This project uses Tailwind CSS for styling. The configuration can be found in `index.css`.

## Example Components

### Button Component

```jsx
import { Button } from "@/components/ui/button";

<Button variant="primary" size="lg">Click Me</Button>
```

### Card Component

```jsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## Updates in the Client Folder

- **Routing**: Added `App.jsx` with routing for student and admin pages using React Router.
- **State Management**: Configured Redux Toolkit with slices for authentication, courses, and course progress.
- **API Integration**: Added API integrations for user authentication, course management, and course progress tracking using Redux Toolkit Query.
- **UI Components**: Created reusable components such as `Button`, `Card`, `Tabs`, `Input`, `Label`, and `Toaster`.
- **Profile Page**: Added functionality to view and update user profiles.
- **Course Progress Page**: Added functionality to track lecture progress and mark courses as completed.
- **Styling**: Utilized Tailwind CSS for styling and added custom configurations in `index.css`.
- **Dynamic Theme Support**: Integrated theme switching using `ThemeProvider`.
- **Protected Routes**: Added route protection for authenticated users and admin users.
