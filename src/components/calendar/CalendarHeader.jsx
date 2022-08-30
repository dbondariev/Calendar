import React from 'react';
import PropTypes from 'prop-types';
import { days } from '../../utils/dateUtils.js';
import Navigation from '../navigation/Navigation.jsx';

const CalendarReact = ({ weekDates }) => (
	<header className='calendar__header'>
		{weekDates.map(dayDate => (
			<Navigation
				key={dayDate.getTime()}
				dayName={days[dayDate.getDay()]}
				dayDate={dayDate.getDate()}
			/>
		))}
	</header>
);

export default CalendarReact;

CalendarReact.propTypes = {
	weekDates: PropTypes.array.isRequired,
};
