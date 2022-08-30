import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange, DAYS_IN_WEEK } from './utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(getWeekStartDate(new Date()));
  const [modalState, setModalState] = useState(false);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const currentDate = new Date(weekStartDate).getDate();

  const prevWeekHandler = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(currentDate - DAYS_IN_WEEK))
    );
  };

  const nextWeekHandler = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(currentDate + DAYS_IN_WEEK))
    );
  };

  const toCurrentWeekHandler = () => {
    setWeekStartDate(new Date());
  };

  const toggleModalState = () => {
    setModalState(!modalState);
  };

  return (
    <>
      <Header
        prevWeek={prevWeekHandler}
        nextWeek={nextWeekHandler}
        currentWeek={toCurrentWeekHandler}
        weekStartDate={weekStartDate}
        weekDates={weekDates}
        modalStateHandler={toggleModalState}
      />
      <Calendar weekDates={weekDates} modalState={modalState} modalStateHandler={toggleModalState} />
    </>
  );
};

export default App;
