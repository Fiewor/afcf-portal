import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";

import ReportingTable from "./components/ReportingTable";
import MorningPrayer from "./components/MorningPrayer";
import ReportingForm from "./components/ReportingForm";
import { setReportingScreen } from "./slices/reporting";

import "./styles/reporting.scss";

const Reporting = () => {
  const dispatch = useDispatch();
  const reportingScreen = useSelector(
    (state) => state.reporting.reportingScreen
  );

  const isSeperatedByHypens = (str) => /-/.test(str);

  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const changeToPascalCase = (str) => {
    if (isSeperatedByHypens(str)) {
      return str
        .split("-")
        .reduce(
          (prev, curr) =>
            `${capitalizeFirstLetter(prev)} ${capitalizeFirstLetter(curr)}`
        );
    } else {
      return capitalizeFirstLetter(str);
    }
  };

  const renderScreens = () => {
    switch (reportingScreen) {
      case "reporting": {
        return <ReportingTable />;
      }
      case "morning-prayer":
        return <MorningPrayer />;

      case "bible-study":
        return <ReportingForm />;

      case "fellowship":
        return <ReportingForm />;

      case "welcome-program":
        return <ReportingForm />;

      case "revival-program":
        return <ReportingForm />;

      default:
        return <ReportingTable />;
    }
  };

  return (
    <div className="reporting">
      <div className="reporting__left" width={4}>
        <div>
          <Link to="/dashboard">Main Menu</Link>

          <p
            className="reporting__left__heading"
            onClick={() => dispatch(setReportingScreen("table"))}
          >
            Reporting
          </p>

          <div className="reporting__left__link-container">
            <p
              onClick={() => dispatch(setReportingScreen("morning-prayer"))}
              className="reporting__left__link-container__link"
            >
              Morning Prayer
            </p>
            <p
              onClick={() => dispatch(setReportingScreen("bible-study"))}
              className="reporting__left__link-container__link"
            >
              Bible Study
            </p>
            <p
              onClick={() => dispatch(setReportingScreen("fellowship"))}
              className="reporting__left__link-container__link"
            >
              Fellowship
            </p>
            <p
              onClick={() => dispatch(setReportingScreen("welcome-program"))}
              className="reporting__left__link-container__link"
            >
              Welcome Program
            </p>
            <p
              onClick={() => dispatch(setReportingScreen("revival-program"))}
              className="reporting__left__link-container__link"
            >
              Revival program
            </p>
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

        {renderScreens()}
      </div>
    </div>
  );
};

export default Reporting;
