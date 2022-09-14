import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { getEmployees, setEmployees, setIsActive } from 'store/employees';

import LetterEmployees from '../letter-employees';
import Row from '../row';
import { alphabet } from './alphabet';

import './index.css';

const Employees: React.FC = () => {
	const dispatch = useAppDispatch();
	const { employees } = useAppSelector((state) => state.employees);

	const [sorted, setSorted] = useState<Map<string, typeof employees>>();

	const sortByName = () => {
		const map = new Map<string, typeof employees>();
		for (let i = 0; i < employees.length; i++) {
			const e = employees[i];
			const key = e.lastName[0].toLowerCase();
			if (map.has(key)) {
				map.set(key, [...(map.get(key) || []), e]);
			} else {
				map.set(key, [e]);
			}
		}
		setSorted(map);
	};

	useEffect(() => {
		sortByName();
	}, [employees]);

	const changeActive = (id: string, isActive: boolean) => {
		dispatch(setIsActive({ id, isActive }));
	};

	const lettersJsx = useMemo(
		() =>
			alphabet.map((letter) => {
				const emp = sorted?.get(letter);
				return (
					<LetterEmployees key={letter} letter={letter} employees={emp || []} changeIsActive={changeActive} />
				);
			}),
		[sorted],
	);
	return (
		<div className="employees-container">
			<div className="employees-sorted">{lettersJsx}</div>
		</div>
	);
};

export default Employees;
