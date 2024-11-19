import LoginPage from "../pages/login-page";
import {Route, Routes} from "react-router-dom";
import ProtectedRoute from "./protected-route";
import MainEmployeesPage from "../pages/main-employees";
import PersonalProfile from "../pages/personal-page";
import LeaveFeedback from "../pages/leave-feedback";
import SearchTeam from "../pages/header-team";


// All routes for navigation
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>

            <Route
                path="/something/*"
                element={
                    <ProtectedRoute>
                        <MainEmployeesPage/>
                    </ProtectedRoute>
                }
            />

            <Route
                path="/pathes/:id"
                element={
                    <ProtectedRoute>
                        <PersonalProfile/>
                    </ProtectedRoute>
                }
            />

            <Route
                path={'/leave-feedback/:id'}
                element={
                    <ProtectedRoute>
                        <LeaveFeedback/>
                    </ProtectedRoute>
                }
            />

            {/* Новый маршрут для "Поиск команды" */}
            <Route
                path="/team-search"
                element={
                    <ProtectedRoute>
                        <SearchTeam/>
                    </ProtectedRoute>
                }
            />
        </Routes>
    )
}

export default AllRoutes;