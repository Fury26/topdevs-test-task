import React from 'react';
import { Employee } from 'store/employees/types';

import Row from '../row';

import './index.css';

type Props = {
	letter: string;
	employees: Employee[];
	changeIsActive: (id: string, isActive: boolean) => any;
};

const LetterEmployees: React.FC<Props> = ({ letter, employees, changeIsActive }) => {
	return (
		<div className="letter-container">
			<h2 className="letter-container-name">Letter: {letter}</h2>
			<div className="letter-container-employees">
				{employees.length ? (
					employees.map((e) => (
						<Row
							id={e.id}
							key={e.id}
							name={`${e.firstName} ${e.lastName}`}
							isActive={!!e.isActive}
							toggleIsActive={(val) => changeIsActive(e.id, val)}
						/>
					))
				) : (
					<span>No Employees</span>
				)}
			</div>
		</div>
	);
};

export default LetterEmployees;
