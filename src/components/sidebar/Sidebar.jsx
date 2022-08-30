import React from "react";
import PropTypes from "prop-types";

import "./sidebar.scss";

const Sidebar = ({ timeHour }) => (
  <div className="time-slot">
    <span className="time-slot__time">{`${timeHour}:00`}</span>
  </div>
);

export default Sidebar;

Sidebar.propTypes = {
  timeHour: PropTypes.number.isRequired,
};
