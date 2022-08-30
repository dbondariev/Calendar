import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EventModal from './EventModal.jsx';
import './event.scss';
import '../../common.scss';

const Event = ({ height, marginTop, title, time, id, deleteEvent, dateFrom }) => {
  const [deleteButton, setDeleteButton] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };

  const ToggleButton = event => {
    event.stopPropagation();
    setDeleteButton(!deleteButton);
  };

  return (
    <div style={eventStyle} className="event" onClick={event => ToggleButton(event)}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {deleteButton && <EventModal deleteEvent={deleteEvent} id={id} dateFrom={dateFrom} />}
    </div>
  );
};

export default Event;

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string,
  time: PropTypes.string,
  id: PropTypes.string.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  dateFrom: PropTypes.number.isRequired,
};
