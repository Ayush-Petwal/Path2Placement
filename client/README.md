# Path2Placement Client

## Overview

The client-side application for Path2Placement is built using React and Vite, providing a modern and responsive user interface for students and instructors.

## Architecture

### Core Technologies

- **React**: Frontend library for building user interfaces
- **Vite**: Build tool and development server
- **React Router**: Handles client-side routing
- **Redux Toolkit**: State management solution
- **RTK Query**: Data fetching and caching layer
- **Tailwind CSS**: Utility-first CSS framework

### Project Structure

- **src/main.jsx**: Application entry point
- **src/App.jsx**: Main component with routing configuration
- **src/layout/**: Layout components used across pages
- **src/pages/**: Page components organized by user role
- **src/components/**: Reusable UI components
- **src/features/**: Redux slices and API services
- **src/app/**: Redux store configuration
- **src/lib/**: Utility functions and helpers

### Data Flow

1. **User Interaction**: User interacts with the UI
2. **API Call**: Interaction triggers an RTK Query hook call
3. **State Update**: API response updates Redux store
4. **UI Update**: Component re-renders with new data

### Authentication Flow

1. User logs in via login form
2. Credentials are sent to the server via RTK Query
3. On successful authentication:
   - JWT token is stored as HTTP-only cookie
   - User data is stored in Redux state
4. Protected routes check Redux state for authentication status

### Routing Structure

- **Public Routes**: Home page, login/registration
- **Protected Routes**: Profile, course details, my learning
- **Role-Based Routes**: Admin dashboard for instructors

### Responsive Design

- **Mobile-First Approach**: UI components designed for mobile first
- **Adaptive Components**: Changing layouts based on screen size
- **Mobile Navigation**: Sheet-based navigation for small screens
- **Desktop Navigation**: Full navigation bar for larger screens

### State Management

- **Auth State**: Manages user authentication status
- **User Data**: Stores current user information
- **Course Data**: Manages course listing and details
- **UI State**: Controls UI elements like theme preference

### API Integration

- **Auth API**: Handles user registration, login, profile management
- **Course API**: Manages course listing, details, and enrollment
- **Media Handling**: Supports file uploads for profile pictures and lecture videos

## Lecture Management System

The application includes a comprehensive lecture management system that allows instructors to:

1. **Create Lectures**: Add new lectures to courses with titles and descriptions
2. **Edit Lectures**: Update lecture details including title, video content, and preview settings
3. **Remove Lectures**: Delete unwanted lectures from courses
4. **Video Management**:
   - Upload lecture videos with progress tracking
   - Set preview status (free/premium) for lectures
   - Store video information including URLs and public IDs

### Lecture Components

- **CreateLecture**: Interface for adding new lectures to a course
- **EditLecture**: Page for modifying existing lecture content
- **LectureTab**: Core component handling lecture editing functionality
- **Lecture**: Display component for individual lecture items

### Lecture Workflow

1. Instructor navigates to course lecture management
2. Creates lecture with basic information (title)
3. Edits lecture to add video content
4. Sets lecture visibility preferences (free/premium)
5. Saves changes which are immediately reflected in the course

## Development Approach

The application follows a component-based architecture with clear separation of concerns:

- **Presentation Components**: Focus on UI rendering
- **Container Components**: Handle data fetching and state
- **Custom Hooks**: Extract reusable logic
- **API Services**: Centralize API communication
- **Context Providers**: Provide theme and authentication context

### Recent Updates

- **Dark Mode Support**: Added dark mode toggle and theme management.
- **Enhanced UI Components**: Updated UI components for better user experience.
- **Improved State Management**: Refined Redux slices and RTK Query integration.
- **New Pages**: Added new pages for course search, course progress, and admin functionalities.
- **Responsive Design Enhancements**: Improved mobile and desktop navigation.
- **Lecture Management**: Added comprehensive lecture creation and management functionality.
