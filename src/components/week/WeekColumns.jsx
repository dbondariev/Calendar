import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Day from '../day/Day.jsx';
import RedLine from '../redLine/RedLine.jsx';

const WeekColumns = ({ weekDates, timeSlotHandler, events, deleteEvent }) => (
  <div className="calendar__week" onClick={event => timeSlotHandler(event)}>
    {weekDates.map(dayStart => {
      const dayEnd = new Date(dayStart.getTime()).setHours(new Date(dayStart).getHours() + 24);
      const dayEvents = events.filter(
        event => new Date(event.dateFrom) > new Date(dayStart) && new Date(event.dateTo) < dayEnd,
      );

      return (
        <Day
          key={dayStart.getDate()}
          dataDay={dayStart.toString()}
          dayEvents={dayEvents}
          deleteEvent={deleteEvent}
        >
          {moment(dayStart).format('LL') === moment(new Date()).format('LL') && <RedLine />}
        </Day>
      );
    })}
  </div>
);

export default WeekColumns;

WeekColumns.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  timeSlotHandler: PropTypes.func.isRequired,
};
