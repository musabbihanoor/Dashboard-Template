import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

// import PrivateRoute from "./PrivateRoute";

export const AppRouter = ({ authorize }) => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard authorize={authorize} />} />
    </Routes>
  );
};
