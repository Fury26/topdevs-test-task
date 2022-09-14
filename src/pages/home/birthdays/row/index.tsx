import React from 'react';
import moment from 'moment';

import './index.css';

type Props = {
	name: string;
	dob: string;
};

const Row: React.FC<Props> = ({ name, dob }) => {
	return (
		<div className="birthday-row">
			<span>
				{name}: <strong>{moment(dob).format('MMMM Do YYYY')}</strong>
			</span>
		</div>
	);
};

export default Row;
