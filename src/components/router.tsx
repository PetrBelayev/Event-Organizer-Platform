import LoginPage from "../pages/login-page";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/protected-route";
import MainPage from "../pages/main-page";
import DetailedCard from "../pages/detailed-card";
import EditAdd from "../pages/edit-app-event";
import AboutUs from "../pages/about-us";
import Register from "../pages/register";

// All routes for navigation
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />{" "}
      <Route path="/register" element={<Register />} />
      <Route
        path="/main-page"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      />
      EditAdd
      <Route
        path="/current-event/:id"
        element={
          <ProtectedRoute>
            <DetailedCard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-event/:id"
        element={
          <ProtectedRoute>
            <EditAdd />
          </ProtectedRoute>
        }
      />
      <Route
        path="/about-us"
        element={
          <ProtectedRoute>
            <AboutUs />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
