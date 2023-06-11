import React from "react";
import { Link } from "react-router-dom";
import { Grid, Dropdown } from "semantic-ui-react";
import "../styles/main.scss";

const Main = () => {
  return (
    <Grid className="main-grid">
      <Grid.Row columns="equal" className="header">
        <Grid.Column className="header__column">
          <p className="heading">Dashboard Overview</p>
        </Grid.Column>

        <Grid.Column className="header__column">
          <Dropdown text="Select session" className="content">
            <Dropdown.Menu>
              <Dropdown.Item text="2022/2023 Session" />
              <Dropdown.Item text="2023/2024 Session" />
              <Dropdown.Item text="2024/2025 Session" />
            </Dropdown.Menu>
          </Dropdown>
        </Grid.Column>

        <Grid.Column className="header__column">
          <Dropdown text="Select duration" className="content">
            <Dropdown.Menu>
              <Dropdown.Item text="Last 7 days" />
              <Dropdown.Item text="Last 2 weeks" />
              <Dropdown.Item text="Last month" />
            </Dropdown.Menu>
          </Dropdown>
        </Grid.Column>

        <Grid.Column className="header__column">
          <p className="content">Jan 12, 2023</p>
        </Grid.Column>

        <Grid.Column className="header__column">
          <p className="content">May 25, 2023</p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row className="main">
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={10} textAlign="center" className="main__center">
              <p>No information to show</p>
            </Grid.Column>

            <Grid.Column width={6} className="main__side">
              <Grid.Row className="main__side__row">
                <Grid.Column className="main__side__row__cell">
                  <p>Total Members</p>
                  <p className="main__side__row__cell__sub-text">203</p>
                  {/* change this to navigate to /profiles/members when it's implemented */}
                  <Link to="/profiles">See all member list</Link>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className="main__side__row">
                <Grid.Column className="main__side__row__cell">
                  <p>Total Events</p>
                  <p className="main__side__row__cell__sub-text">8</p>
                  <Link>Total Events</Link>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className="main__side__row">
                <Grid.Column className="main__side__row__cell">
                  <p>Total Events</p>
                  <p className="main__side__row__cell__sub-text">8</p>
                  <Link>Total Events</Link>
                </Grid.Column>
              </Grid.Row>

              {/* <Grid.Row className="last-cell"></Grid.Row> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Row>
    </Grid>
  );
};

export default Main;
