import React from 'react';
import PropTypes from 'prop-types';
import CalendarTimescale from './CalendarTimescale.jsx';
import Week from '../week/Week.jsx';

const CalendarBody = ({
	weekDates,
	events,
	deleteEvent,
	modalStateHandler,
	modalState,
	createEventHandler,
}) => (
	<div className='calendar__body'>
		<div className='calendar__week-container'>
			<CalendarTimescale />
			<Week
				weekDates={weekDates}
				events={events}
				deleteEvent={deleteEvent}
				modalStateHandler={modalStateHandler}
				modalState={modalState}
				createEventHandler={createEventHandler}
			/>
		</div>
	</div>
);

export default CalendarBody;

CalendarBody.propTypes = {
	weekDates: PropTypes.array.isRequired,
	events: PropTypes.array.isRequired,
	deleteEvent: PropTypes.func.isRequired,
	modalStateHandler: PropTypes.func.isRequired,
	modalState: PropTypes.bool.isRequired,
	createEventHandler: PropTypes.func.isRequired,
};
