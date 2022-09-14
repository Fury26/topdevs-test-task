import React from 'react';
import { Employee } from 'store/employees/types';

import Row from '../row';

import './index.css';

type Props = {
	month: string;
	employees: Employee[];
};

const MonthEmployee: React.FC<Props> = ({ month, employees }) => {
	return (
		<div className="birthday-container">
			<h2 className="birthday-container-name">{month}:</h2>
			<div className="birthday-container-employees">
				{employees.length ? (
					employees.map((e) => <Row key={e.id} dob={e.dob} name={`${e.lastName} ${e.firstName}`} />)
				) : (
					<span>No Employees</span>
				)}
			</div>
		</div>
	);
};

export default MonthEmployee;
