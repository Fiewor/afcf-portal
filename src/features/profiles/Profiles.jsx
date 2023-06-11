import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Grid, Sidebar } from "semantic-ui-react";
import { useSelector } from "react-redux";

import ProfileForm from "./components/ProfileForm.jsx";
import CampusFellowship from "./components/CampusFellowship.jsx";

import "./styles/profiles.scss";
import { setProfilesScreen } from "./slices/profiles.js";
import { Link } from "react-router-dom";
import MembersList from "./components/MembersList.jsx";
import MembersForm from "./components/MembersForm.jsx";
import ExcosHistory from "./components/ExcosHistory.jsx";

const Profiles = () => {
  const dispatch = useDispatch();
  const profilesScreen = useSelector((state) => state.profiles.profilesScreen);
  const membersScreen = useSelector((state) => state.profiles.membersScreen);

  const members = [
    {
      id: 0,
      fullName: "Oluwagbemiga Adesoga",
      number: "08100558935",
      session: "2022/2023",
    },
    {
      id: 1,
      fullName: "Okechukwu Philemon",
      number: "08100558935",
      session: "2022/2023",
    },
    {
      id: 2,
      fullName: "Ibrahim Abdul Yahaya",
      number: "08100558935",
      session: "2022/2023",
    },
    {
      id: 3,
      fullName: "Oluwagbemiga Adesoga",
      number: "08100558935",
      session: "2022/2023",
    },
    {
      id: 4,
      fullName: "Okechukwu Philemon",
      number: "08100558935",
      session: "2022/2023",
    },
    {
      id: 5,
      fullName: "Ibrahim Abdul Yahaya",
      number: "08100558935",
      session: "2022/2023",
    },
  ];

  const renderScreens = () => {
    switch (profilesScreen) {
      case "coordinator":
        return <ProfileForm title="Coordinator" />;

      case "secretary":
        return <ProfileForm title="Secretary" />;

      case "fellowship":
        return <CampusFellowship />;

      case "members":
        return membersScreen === "list" ? (
          <MembersList members={members} />
        ) : (
          <MembersForm />
        );

      case "excos-history":
        return <ExcosHistory />;

      default:
        return <ProfileForm title="Coordinator" />;
    }
  };

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
                  <p
                    onClick={() => dispatch(setProfilesScreen("coordinator"))}
                    className={`link`}
                  >
                    Coordinator
                  </p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className="upper-row__column__row">
                <Grid.Column className="upper-row__column__row__column">
                  <p
                    onClick={() => dispatch(setProfilesScreen("secretary"))}
                    className={`link`}
                  >
                    Secretary
                  </p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className="upper-row__column__row">
                <Grid.Column className="upper-row__column__row__column">
                  <p
                    onClick={() => dispatch(setProfilesScreen("fellowship"))}
                    className={`link`}
                  >
                    Fellowship
                  </p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className="upper-row__column__row">
                <Grid.Column className="upper-row__column__row__column">
                  <p
                    onClick={() => dispatch(setProfilesScreen("members"))}
                    className={`link`}
                  >
                    Members
                  </p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className="upper-row__column__row">
                <Grid.Column className="upper-row__column__row__column">
                  <p
                    onClick={() => dispatch(setProfilesScreen("excos-history"))}
                    className={`link`}
                  >
                    Excos History
                  </p>
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
          {/* replace this with nested routing logic */}
          {renderScreens()}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Profiles;
