import React from 'react';
import PropTypes from 'prop-types';
import './eventmodal.scss';
import '../../common.scss';

const EventModal = ({ deleteEvent, id, dateFrom }) => (
  <button className="delete-event-btn popup__content" onClick={() => deleteEvent(id, dateFrom)}>
    <i className="fas fa-trash-alt"></i> Delete
  </button>
);

export default EventModal;

EventModal.propTypes = {
  deleteEvent: PropTypes.func.isRequired,
  dateFrom: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
