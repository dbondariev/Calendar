import React from "react";
import PropTypes from "prop-types";
import { getMonths } from "../../utils/dateUtils.js";
import "./header.scss";

const Header = ({
  prevWeek,
  nextWeek,
  currentWeek,
  weekStartDate,
  weekDates,
  modalStateHandler,
}) => (
  <header className="header">
    <button className="button create-event-btn" onClick={modalStateHandler}>
      <i className="fas fa-plus create-event-btn__icon"></i>
      Create
    </button>
    <div className="navigation">
      <button className="navigation__today-btn button" onClick={currentWeek}>
        Today
      </button>
      <button className="icon-button navigation__nav-icon" onClick={prevWeek}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="icon-button navigation__nav-icon" onClick={nextWeek}>
        <i className="fas fa-chevron-right"></i>
      </button>
      <span className="navigation__displayed-month">
        {getMonths(weekDates, weekStartDate)}
      </span>
    </div>
  </header>
);

export default Header;

Header.propTypes = {
  prevWeek: PropTypes.func.isRequired,
  nextWeek: PropTypes.func.isRequired,
  currentWeek: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
  weekStartDate: PropTypes.instanceOf(Date).isRequired,
  modalStateHandler: PropTypes.func.isRequired,
};
