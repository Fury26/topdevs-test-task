import React, { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import { useAppDispatch, useAppSelector } from 'store';

import { months } from 'pages/home/constants';

import MonthEmployees from '../month-employees';

import './index.css';

const Birthdays: React.FC = () => {
	const { employees } = useAppSelector((state) => state.employees);

	const [sorted, setSorted] = useState<Map<string, typeof employees>>();

	const sortByDate = () => {
		const map = new Map<string, typeof employees>();
		for (let i = 0; i < employees.length; i++) {
			const e = employees[i];
			if (!e.isActive) {
				continue;
			}
			const b = moment(e.dob).month();

			const key = months[b];
			if (map.has(key)) {
				map.set(key, [...(map.get(key) || []), e]);
			} else {
				map.set(key, [e]);
			}
		}
		setSorted(map);
	};

	useEffect(() => {
		sortByDate();
	}, [employees]);

	const lettersJsx = useMemo(
		() =>
			sorted?.size ? (
				months.map((month) => {
					const emp = sorted?.get(month);
					return (
						<MonthEmployees
							key={month}
							month={month}
							employees={emp?.sort((a, b) => (a.lastName > b.lastName ? 1 : -1)) || []}
						/>
					);
				})
			) : (
				<span className="birthdays-empty">Employees List is empty</span>
			),
		[sorted],
	);

	return (
		<div>
			<h2>Birthdays</h2>
			{lettersJsx}
		</div>
	);
};

export default Birthdays;
