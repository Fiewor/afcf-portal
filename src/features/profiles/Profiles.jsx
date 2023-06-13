import React from "react";
import { Grid } from "semantic-ui-react";
import { Link, Outlet, NavLink } from "react-router-dom";

import "./styles/profiles.scss";

const Profiles = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={4} className="profile-sidebar">
          <Grid.Row columns={1} className="upper-row">
            <Grid.Column className="upper-row__column">
              <Grid.Row className="upper-row__column__row">
                <Link to="/dashboard">Main Menu</Link>
              </Grid.Row>

              <Grid.Row className="upper-row__column__row">
                <h1>Profiles</h1>
              </Grid.Row>

              <Grid.Row className="upper-row__column__row">
                <Grid.Column className="upper-row__column__row__column">
                  <NavLink to="/profiles/coordinator" className={`link`}>
                    Coordinator
                  </NavLink>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className="upper-row__column__row">
                <Grid.Column className="upper-row__column__row__column">
                  <NavLink to="/profiles/secretary" className={`link`}>
                    Secretary
                  </NavLink>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className="upper-row__column__row">
                <Grid.Column className="upper-row__column__row__column">
                  <NavLink to="/profiles/fellowship" className={`link`}>
                    Fellowship
                  </NavLink>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className="upper-row__column__row">
                <Grid.Column className="upper-row__column__row__column">
                  <NavLink to="/profiles/members/list" className={`link`}>
                    Members
                  </NavLink>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className="upper-row__column__row">
                <Grid.Column className="upper-row__column__row__column">
                  <NavLink to="/profiles/excos-history" className={`link`}>
                    Excos History
                  </NavLink>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns="equal" className="bottom-row">
            <Grid.Column>
              <div className="circle"></div>
            </Grid.Column>

            <Grid.Column>
              <Grid.Row>
                <p className="text">AFCF Unilag</p>
              </Grid.Row>
              <Grid.Row>
                <p className="sub-text">Campus Fellowship</p>
              </Grid.Row>
            </Grid.Column>

            <Grid.Column>{/* add dropdown here */}</Grid.Column>
          </Grid.Row>
        </Grid.Column>

        <Grid.Column width={12}>
          <Outlet />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Profiles;
