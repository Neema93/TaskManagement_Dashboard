import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './../components/Login';
import NotFound from "../components/NotFound";
import TaskDashboard from "../components/TaskDashboard";
import PrivateRoute from "./PrivateRoute";
import CreateTask from "../components/CreateTask";
const AppRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<TaskDashboard />} />
            <Route path="/create" element={<CreateTask />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};
export default AppRoute;
