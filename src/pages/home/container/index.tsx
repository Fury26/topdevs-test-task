import React, { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { getEmployees } from 'store/employees';

import Birthdays from '../birthdays/container';
import Employees from '../employees/container';

import './index.css';

const Home: React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getEmployees());
	}, []);

	return (
		<div className="home">
			<Employees />
			<Birthdays />
		</div>
	);
};

export default Home;
