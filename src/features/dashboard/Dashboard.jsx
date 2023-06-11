import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Profiles from "../profiles/Profiles";

import "./styles/dashboard.scss";
import Activities from "./Activities";

const Dashboard = () => {
  const screen = useSelector((state) => state.dashboard.screen);

  const renderScreens = () => {
    switch (screen) {
      case "dashboard":
        return <Main />;
      case "activities":
        return <Activities />;
      default:
        return <Main />;
    }
  };
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={4}>
          <Sidebar />
        </Grid.Column>
        <Grid.Column width={12} className="main-container">
          {/* conditionally render different pages here */}
          {renderScreens()}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Dashboard;
