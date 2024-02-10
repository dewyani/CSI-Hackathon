import { Navbar } from "flowbite-react";
import "./App.css";
import DashboardAgency from "./components/DashboardAgency";
import DashboardUser from "./components/DashboardUser";
import Signup from "./components/Signup";
import Login from "./components/Login";
import History from "./components/History";
import { Routes, Route } from "react-router-dom";
import MyComplaints from "./components/MyComplaints";
import LodgeComplaints from "./components/LodgeComplaints";
import Statistics from "./components/Statistics";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard_User" element={<DashboardUser />} />
        <Route path="/dashboard_Agency" element={<DashboardAgency />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard_User/history" element={<History />} />
        <Route path="/dashboard_User/myComplaints" element={<MyComplaints />} />
        <Route path="/dashboard_User/lodge" element={<LodgeComplaints />} />
        <Route path="/dashboard_Agency/stats" element={<Statistics />} />
        <Route path="/dashboard_Agency/timeline" element={<Timeline />} />
      </Routes>
    </>
  );
}

export default App;
