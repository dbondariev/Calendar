import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalOverlay from './ModalOverlay.jsx';
import { defaultEventProps } from '../../utils/eventUtils.js';
import './modal.scss';

const Modal = ({ modalStateHandler, createEventHandler, timeSlotDate }) => {
  const [eventData, setEventData] = useState(defaultEventProps(timeSlotDate));

  const changeEventHandler = e => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  return (
    <ModalOverlay
      modalStateHandler={modalStateHandler}
      createEventHandler={createEventHandler}
      changeEventHandler={changeEventHandler}
      eventData={eventData}
    />
  );
};

export default Modal;

Modal.propTypes = {
  createEventHandler: PropTypes.func.isRequired,
  modalStateHandler: PropTypes.func.isRequired,
  timeSlotDate: PropTypes.object,
};

Modal.defaultProps = {
  timeSlotDate: null,
};
