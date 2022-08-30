import React from 'react';
import { hours } from '../../utils/dateUtils.js';
import Sidebar from '../sidebar/Sidebar.jsx';

const CalendarTimescale = () => (
  <div className="calendar__time-scale">
    {hours.map(hour => (
      <Sidebar key={hour} timeHour={hour} />
    ))}
  </div>
);

export default CalendarTimescale;
