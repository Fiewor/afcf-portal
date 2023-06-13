import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import "../styles/sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__upper">
        <Link to="/dashboard" className={`link`}>
          Dashboard
        </Link>

        <Link to="/profiles/coordinator" className={`link`}>
          Profiles
        </Link>

        <Link to="/reporting" className={`link`}>
          Reporting
        </Link>

        <Link to="/contents" className={`link`}>
          Contents
        </Link>

        <Link to="/activities" className={`link`}>
          Activities
        </Link>
      </div>

      <div className="sidebar__bottom">
        <div className="circle"></div>

        <div className="sidebar__bottom__column">
          <p className="text">AFCF Unilag</p>
          <p className="sub-text">Campus Fellowship</p>
        </div>

        <div>{/* add dropdown here */}</div>
      </div>
    </div>
  );
};

export default Sidebar;
