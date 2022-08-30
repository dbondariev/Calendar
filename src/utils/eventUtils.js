import moment from 'moment';
import { roundMultiple15, currentDate } from './dateUtils';
import { getEvent } from '../gateway/gateway';

const formatNewEvent = eventData => {
  const { title, date, startTime, endTime, description } = eventData;
  const newEvent = {
    title,
    description,
    dateFrom: new Date(`${date} ${startTime}`).setMinutes(
      roundMultiple15(new Date(`${date} ${startTime}`).getMinutes()),
    ),
    dateTo: new Date(`${date} ${endTime}`).setMinutes(
      roundMultiple15(new Date(`${date} ${endTime}`).getMinutes()),
    ),
    id: Math.random(),
  };

  return newEvent;
};

export default formatNewEvent;

export const getNewEvents = func => {
  getEvent()
    .then(eventsList => func(eventsList))
    .catch(error => {
      alert(error.message);
    });
};

export const defaultEventProps = timeSlotDate => {
  const onCreateBtnClickObject = {
    title: '',
    date: moment().format('YYYY-MM-DD'),
    startTime: moment(currentDate).format('HH:mm'),
    endTime: moment(currentDate).add(1, 'hours').format('HH:mm'),
    description: '',
  };

  if (!timeSlotDate) {
    return onCreateBtnClickObject;
  }

  const { timeHourStart, timeHourEnd, timeDay } = timeSlotDate;
  const onTimeSlotClickObject = {
    title: '',
    date: moment(new Date(timeDay)).format('YYYY-MM-DD'),
    startTime: timeHourStart,
    endTime: timeHourEnd,
    description: '',
  };
  return onTimeSlotClickObject;
};
