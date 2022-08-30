import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/Modal.jsx';
import { slotData } from '../../utils/dateUtils.js';
import WeekColumns from './WeekColumns.jsx';
import './week.scss';

const Week = ({
  weekDates,
  events,
  deleteEvent,
  modalStateHandler,
  modalState,
  createEventHandler,
}) => {
  const [timeSlotDate, setTimeSlotDate] = useState(null);

  const timeSlotHandler = event => {
    if (!event.target.classList.contains('calendar__time-slot')) {
      return;
    }
    setTimeSlotDate(slotData(event));
    modalStateHandler();
  };

  useEffect(() => {
    setTimeSlotDate(null);
  }, [timeSlotDate]);

  return (
    <>
      {modalState && (
        <Modal
          modalStateHandler={modalStateHandler}
          createEventHandler={createEventHandler}
          timeSlotDate={timeSlotDate}
        />
      )}
      <WeekColumns
        weekDates={weekDates}
        timeSlotHandler={timeSlotHandler}
        events={events}
        deleteEvent={deleteEvent}
      />
    </>
  );
};

export default Week;

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  modalStateHandler: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
  createEventHandler: PropTypes.func.isRequired,
};
