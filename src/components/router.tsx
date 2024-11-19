import LoginPage from "../pages/login-page";
import {Route, Routes} from "react-router-dom";
import ProtectedRoute from "../components/protected-route";
import MainPage from "../pages/main-page";
import DetailedCard from "../pages/detailed-card";

// All routes for navigation
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>

            <Route path="/main-page" element={<ProtectedRoute>
                <MainPage/></ProtectedRoute>}/>

            <Route path="/current-event/:id" element={<ProtectedRoute>
                <DetailedCard/></ProtectedRoute>}/>

        </Routes>
    )
}

export default AllRoutes;