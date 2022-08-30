import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CalendarHeader from './CalendarHeader.jsx';
import CalendarBody from './CalendarBody.jsx';
import { postEvent, fetchDelete } from '../../gateway/gateway.js';
import { deleteValidation } from '../../validation/validation.js';
import formatNewEvent, { getNewEvents } from '../../utils/eventUtils.js';
import './calendar.scss';

const Calendar = ({ weekDates, modalState, modalStateHandler }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getNewEvents(setEvents);
  }, []);

  const createEvent = (e, eventData) => {
    e.preventDefault();
    postEvent(formatNewEvent(eventData)).then(() => getNewEvents(setEvents));
    modalStateHandler();
  };

  const deleteEvent = (id, dateFrom) => {
    if (!deleteValidation(dateFrom)) {
      fetchDelete(id).then(() => getNewEvents(setEvents));
    }
  };

  return (
    <section className="calendar">
      <CalendarHeader weekDates={weekDates} />
      <CalendarBody
        weekDates={weekDates}
        events={events}
        deleteEvent={deleteEvent}
        modalStateHandler={modalStateHandler}
        modalState={modalState}
        createEventHandler={createEvent}
      />
    </section>
  );
};

export default Calendar;

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  modalState: PropTypes.bool.isRequired,
  modalStateHandler: PropTypes.func.isRequired,
};
