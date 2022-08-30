import React from "react";
import PropTypes from "prop-types";

const Navigation = ({ dayName, dayDate }) => (
  <div className="calendar__day-label day-label">
    <span className="day-label__day-name">{dayName}</span>
    <span className="day-label__day-number">{dayDate}</span>
  </div>
);

export default Navigation;

Navigation.propTypes = {
  dayName: PropTypes.string.isRequired,
  dayDate: PropTypes.number.isRequired,
};
