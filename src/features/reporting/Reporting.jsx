import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";

import changeToPascalCase from "../../common/utils/changeToPascalCase";

import "./styles/reporting.scss";
import { setReportingScreen } from "./slices/reporting";
import ReportingTable from "./components/ReportingTable";

const Reporting = () => {
  const dispatch = useDispatch();

  const reportingScreen = useSelector(
    (state) => state.reporting.reportingScreen
  );

  return (
    <div className="reporting">
      <div className="reporting__left" width={4}>
        <div className="reporting__left__top">
          <Link to="/dashboard" onClick={() => dispatch("reporting")}>
            Main Menu
          </Link>

          <Link
            to="/reporting"
            className="reporting__left__top__heading"
            onClick={() => dispatch(setReportingScreen("reporting"))}
          >
            Reporting
          </Link>

          <div className="reporting__left__top__link-container">
            <NavLink
              to="morning-prayer"
              onClick={() => dispatch(setReportingScreen("morning-prayer"))}
            >
              Morning Prayer
            </NavLink>
            <NavLink
              to="bible-study"
              onClick={() => dispatch(setReportingScreen("bible-study"))}
            >
              Bible Study
            </NavLink>
            <NavLink
              to="fellowship"
              onClick={() => dispatch(setReportingScreen("fellowship"))}
            >
              Fellowship
            </NavLink>
            <NavLink
              to="welcome-program"
              onClick={() => dispatch(setReportingScreen("welcome-program"))}
            >
              Welcome Program
            </NavLink>
            <NavLink
              to="revival-program"
              onClick={() => dispatch(setReportingScreen("revival-program"))}
            >
              Revival program
            </NavLink>
          </div>
        </div>

        <div>
          <div className="circle"></div>
          <>
            <p>Grace Afolayan</p>
            <p>Campus Secretary</p>
          </>
        </div>
      </div>

      <div className="reporting__right" width={12}>
        <div className="reporting__right__header">
          <p
            className="reporting__right__header__heading"
            style={{
              margin: 0,
              display: "inline-block",
              paddingRight: "2rem",
              fontWeight: "700",
              fontSize: "1.4em",
            }}
          >
            {changeToPascalCase(reportingScreen)}
          </p>
          {reportingScreen === "reporting" && <Button>Report an event</Button>}
        </div>
        {reportingScreen === "reporting" ? <ReportingTable /> : <Outlet />}
      </div>
    </div>
  );
};

export default Reporting;
