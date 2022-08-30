import React from 'react';
import PropTypes from 'prop-types';

const ModalCreateBtn = ({ modalStateHandler }) => (
  <button className="create-event__close-btn" onClick={modalStateHandler}>
    +
  </button>
);

export default ModalCreateBtn;

ModalCreateBtn.propTypes = {
  modalStateHandler: PropTypes.func.isRequired,
};
