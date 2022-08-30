import moment from 'moment';

export const deleteValidation = dateFrom => {
  const currentTime = moment().format('YYYY-MM-DD HH:mm');
  const beforeDiff = moment(dateFrom).diff(currentTime, 'minutes');
  if (beforeDiff < 15 && beforeDiff >= -14) {
    alert('You can only skip the event, when more than 15 minutes left before it will start');
    return true;
  }
  return false;
};
