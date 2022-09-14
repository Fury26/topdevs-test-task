import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { setIsActive } from 'store/employees';

import { alphabet } from 'pages/home/constants';

import LetterEmployees from '../letter-employees';

import './index.css';

const Employees: React.FC = () => {
	const dispatch = useAppDispatch();
	const { employees } = useAppSelector((state) => state.employees);

	const [sorted, setSorted] = useState<Map<string, typeof employees>>();

	const sortByName = useCallback(() => {
		const map = new Map<string, typeof employees>();
		for (let i = 0; i < employees.length; i++) {
			const e = employees[i];
			const key = e.firstName[0].toLowerCase();
			if (map.has(key)) {
				map.set(key, [...(map.get(key) || []), e]);
			} else {
				map.set(key, [e]);
			}
		}
		setSorted(map);
	}, [employees]);

	useEffect(() => {
		sortByName();
	}, [employees, sortByName]);

	const changeActive = useCallback(
		(id: string, isActive: boolean) => {
			dispatch(setIsActive({ id, isActive }));
		},
		[dispatch],
	);

	const lettersJsx = useMemo(
		() =>
			alphabet.map((letter) => {
				const emp = sorted?.get(letter);
				return (
					<LetterEmployees
						key={letter}
						letter={letter}
						employees={emp?.sort((a, b) => (a.firstName > b.firstName ? 1 : -1)) || []}
						changeIsActive={changeActive}
					/>
				);
			}),
		[sorted, changeActive],
	);
	return (
		<div className="employees-container">
			<h2>Employees</h2>
			<div className="employees-sorted">{lettersJsx}</div>
		</div>
	);
};

export default Employees;
