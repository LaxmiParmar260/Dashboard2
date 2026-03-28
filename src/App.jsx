import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout"; // path check kar lena
import HomePage from "./pages/Home/DashBoard";

export default function App() {
  return (
    <div className="font-poppins">
      <Routes>

        {/* Root → dashboard redirect */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Layout wrapper */}
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<HomePage />} />
        </Route>

        {/* fallback */}
        <Route path="*" element={<Navigate to="/dashboard" />} />

      </Routes>
    </div>
  );
}