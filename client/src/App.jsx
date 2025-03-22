import { createBrowserRouter, BrowserRouter as Router, RouterProvider } from "react-router-dom";
import { Button } from "./components/ui/button";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/student/HeroSection";
import MainLayout from "./layout/MainLayout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
          </>
        ),
      },
      {
        path : 'login',
        element: <Login />
      }
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} /> 
    </main>
  );
}

export default App;
