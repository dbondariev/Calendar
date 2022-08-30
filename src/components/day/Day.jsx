import React from 'react';
import PropTypes from 'prop-types';
import Hour from '../hour/Hour.jsx';
import { hours } from '../../utils/dateUtils.js';

import './day.scss';

const Day = ({ dataDay, dayEvents, deleteEvent, children }) => (
  <div className="calendar__day" data-day={dataDay}>
    {children}
    {hours.map(hour => {
      const hourEvents = dayEvents.filter(event => new Date(event.dateFrom).getHours() === hour);
      return (
        <Hour
          key={dataDay + hour}
          dataHour={hour}
          hourEvents={hourEvents}
          deleteEvent={deleteEvent}
        />
      );
    })}
  </div>
);

export default Day;

Day.propTypes = {
  dataDay: PropTypes.string.isRequired,
  dayEvents: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
};
