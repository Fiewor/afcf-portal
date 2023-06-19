import React from "react";
import { Grid } from "semantic-ui-react";
import { Link, Outlet, NavLink } from "react-router-dom";

import "./styles/profiles.scss";

const Profiles = () => {
  return (
    <div className="profiles">
      <div className="profiles__sidebar">
        <div className="profiles__sidebar__upper">
          <Link to="/dashboard" className="profiles__sidebar__upper__main">
            Main Menu
          </Link>

          <h1>Profiles</h1>

          <div className="profiles__sidebar__upper__link-container">
            <NavLink to="/profiles/coordinator" className={`link`}>
              Coordinator
            </NavLink>

            <NavLink to="/profiles/secretary" className={`link`}>
              Secretary
            </NavLink>

            <NavLink to="/profiles/fellowship" className={`link`}>
              Fellowship
            </NavLink>

            <NavLink to="/profiles/members/list" className={`link`}>
              Members
            </NavLink>

            <NavLink to="/profiles/excos-history" className={`link`}>
              Excos History
            </NavLink>
          </div>
        </div>

        <div className="profiles__sidebar__bottom">
          <div className="circle"></div>

          <div>
            <p className="text">AFCF Unilag</p>
            <p className="sub-text">Campus Fellowship</p>
          </div>

          <div>{/* add dropdown here */}</div>
        </div>
      </div>

      <div className="profiles__main">
        <Outlet />
      </div>
    </div>
  );
};

export default Profiles;
