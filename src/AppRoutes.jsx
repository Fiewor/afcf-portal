import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./features/login/Login";
import Dashboard from "./features/dashboard/Dashboard";
import Profiles from "./features/profiles/Profiles";
import Reporting from "./features/reporting/Reporting";
import Contents from "./features/contents/Contents";
import ProfileForm from "./features/profiles/components/ProfileForm";
import CampusFellowship from "./features/profiles/components/CampusFellowship";
import MembersList from "./features/profiles/components/MembersList";
import MembersForm from "./features/profiles/components/MembersForm";
import ExcosHistory from "./features/profiles/components/ExcosHistory";

import { members } from "./common/utils/members";
import ReportingTable from "./features/reporting/components/ReportingTable";
import MorningPrayer from "./features/reporting/components/MorningPrayer";
import ReportingForm from "./features/reporting/components/ReportingForm";
import Activities from "./features/dashboard/Activities";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profiles" element={<Profiles />}>
          <Route
            path="coordinator"
            element={<ProfileForm title="Coordinator" />}
          />
          <Route
            path="fellowship"
            element={<ProfileForm title="Secretary" />}
          />
          <Route path="secretary" element={<CampusFellowship />} />
          <Route
            path="members/list"
            element={<MembersList members={members} />}
          />
          <Route path="members/form" element={<MembersForm />} />
          <Route path="excos-history" element={<ExcosHistory />} />
        </Route>
        <Route path="/reporting" element={<Reporting />}>
          <Route path="morning-prayer" element={<MorningPrayer />} />
          <Route path="bible-study" element={<ReportingForm />} />
          <Route path="fellowship" element={<ReportingForm />} />
          <Route path="welcome-program" element={<ReportingForm />} />
          <Route path="revival-program" element={<ReportingForm />} />
        </Route>
        <Route path="/contents" element={<Contents />} />
        <Route path="/activities" element={<Activities />} />
        {/* <Route element={<ProtectedRoutes />}> */}
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default AppRoutes;
