import React from "react";
import PropTypes from "prop-types";
import ModalSubmitBtn from "./ModalSubmitBtn.jsx";
import InputField from "./InputField.jsx";

const ModalForm = ({ createEventHandler, changeEventHandler, eventData }) => {
  const { title, date, description, startTime, endTime } = eventData;
  return (
    <form
      className="event-form"
      onSubmit={(e) => createEventHandler(e, eventData)}
    >
      <InputField
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        changeEventHandler={changeEventHandler}
      />
      <div className="event-form__time">
        <InputField
          type="date"
          name="date"
          value={date}
          changeEventHandler={changeEventHandler}
        />
        <InputField
          type="time"
          name="startTime"
          value={startTime}
          changeEventHandler={changeEventHandler}
        />
        <span>-</span>
        <InputField
          type="time"
          name="endTime"
          value={endTime}
          changeEventHandler={changeEventHandler}
        />
      </div>
      <textarea
        name="description"
        placeholder="Description"
        className="event-form__field event-form__description"
        value={description}
        onChange={changeEventHandler}
      ></textarea>
      <ModalSubmitBtn />
    </form>
  );
};

export default ModalForm;

ModalForm.propTypes = {
  eventData: PropTypes.object.isRequired,
  changeEventHandler: PropTypes.func.isRequired,
  createEventHandler: PropTypes.func.isRequired,
};
