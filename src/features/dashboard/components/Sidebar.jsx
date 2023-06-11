import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import { setCurrentScreen } from "../slices/dashboard";

import "../styles/sidebar.scss";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  return (
    <Grid textAlign="left" className="sidebar-main">
      <Grid.Row className="sidebar-main__upper-row">
        <Grid.Column className="sidebar-main__upper-row__link-container">
          <Grid.Row className="sidebar-main__upper-row__link-container__row">
            <Grid.Column>
              <Link to="/dashboard" className={`link`}>
                Dashboard
              </Link>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row className="sidebar-main__upper-row__link-container__row">
            <Grid.Column>
              <Link to="/profiles" className={`link`}>
                Profiles
              </Link>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row className="sidebar-main__upper-row__link-container__row">
            <Grid.Column>
              <Link to="/reporting" className={`link`}>
                Reporting
              </Link>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row className="sidebar-main__upper-row__link-container__row">
            <Grid.Column>
              <Link to="/contents" className={`link`}>
                Contents
              </Link>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row className="sidebar-main__upper-row__link-container__row">
            <Grid.Column>
              <p
                onClick={() => dispatch(setCurrentScreen("activities"))}
                className={`link`}
              >
                Activities
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns="equal" className="sidebar-main__bottom-row">
        <Grid.Column>
          <div className="circle"></div>
        </Grid.Column>

        <Grid.Column className="sidebar-main__bottom-row__column">
          <Grid.Row>
            <p className="text">AFCF Unilag</p>
          </Grid.Row>
          <Grid.Row>
            <p className="sub-text">Campus Fellowship</p>
          </Grid.Row>
        </Grid.Column>

        <Grid.Column>{/* add dropdown here */}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Sidebar;
