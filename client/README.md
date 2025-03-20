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
- `src/App.jsx`: Main application component.
- `src/pages/login.jsx`: Login and Signup page.
- `src/components/ui`: UI components used throughout the application.
- `src/lib/utils.js`: Utility functions.

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

## Tailwind CSS

This project uses Tailwind CSS for styling. The configuration can be found in `tailwind.config.js`.

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
