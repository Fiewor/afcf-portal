import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./features/login/Login";
import Dashboard from "./features/dashboard/Dashboard";
import Profiles from "./features/profiles/Profiles";
import Reporting from "./features/reporting/Reporting";
import Contents from "./features/contents/Contents";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/reporting" element={<Reporting />} />
        <Route path="/contents" element={<Contents />} />
        {/* <Route element={<ProtectedRoutes />}> */}
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default AppRoutes;
