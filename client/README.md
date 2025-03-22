# Path2Placement Client

## Overview

This client is built using React and Vite. It handles the frontend functionalities of the Path2Placement application, a platform designed to help students prepare for and succeed in job placements.

## Project Structure

- `src/main.jsx`: Entry point of the client application.
- `src/App.jsx`: Main application component with routing configuration.
- `src/layout/MainLayout.jsx`: Layout component that wraps all pages with the Navbar.
- `src/pages/Login.jsx`: Login and Signup page.
- `src/pages/student/HeroSection.jsx`: Landing page hero section.
- `src/components/Navbar.jsx`: Navigation component with responsive design.
- `src/components/ui`: UI components used throughout the application.
- `src/features/api`: API service definitions using RTK Query.
- `src/features/authSlice.js`: Redux slice for authentication state management.
- `src/lib/utils.js`: Utility functions.

## Application Architecture

### Routing

The application uses React Router v6 for navigation:

```jsx
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HeroSection />
      },
      {
        path: "login",
        element: <Login />
      }
      // Additional routes will be added as the application grows
    ],
  },
]);
```

### State Management

The application uses Redux Toolkit for state management:

- **Authentication Slice**: Manages user authentication state
- **RTK Query**: Handles API interactions with automatic caching and request management

## Features and Functions

### User Authentication

The application provides comprehensive user authentication features.

#### Register User

- **Functionality:** Allows new users to create an account.
- **Implementation:** Uses `useRegisterUserMutation` hook from RTK Query.
- **Example:**
    1. Navigate to the login page.
    2. Fill in the registration form with name, email, and password.
    3. Click the "Signup" button.

#### Login User

- **Functionality:** Allows existing users to log in to their account.
- **Implementation:** Uses `useLoginUserMutation` hook and updates Redux state.
- **Example:**
    1. Navigate to the login page.
    2. Fill in the login form with email and password.
    3. Click the "Login" button.

#### Logout User

- **Functionality:** Allows users to logout from their account.
- **Implementation:** Uses `useLogoutUserMutation` hook and clears Redux state.
- **Access:** Available in the user dropdown menu in the navbar.

#### Load User Profile

- **Functionality:** Automatically loads user profile on application start.
- **Implementation:** Uses `useLoadUserQuery` hook to fetch user data.

### Navigation

The application features a responsive navigation system:

- **Desktop**: Full navigation bar with user dropdown and authentication options
- **Mobile**: Sheet-based slide-in navigation menu with appropriate options

### Role-Based Features

The application provides different features based on user roles:

- **Student**: Access to learning materials and profile management
- **Instructor**: Additional access to dashboard and administrative features

### Dark Mode Support

The application supports dark mode toggle with persistent state.
## Future Enhancements

- Student dashboard for tracking progress
- Course browsing and enrollment functionality
- Advanced profile management
- Placement tracking and analytics
- Company integration for direct recruitment
