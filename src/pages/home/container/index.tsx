import React from 'react';

import Birthdays from '../birthdays/container';
import Employees from '../employees/container';

import './index.css';

const Home: React.FC = () => {
	return (
		<div className="home">
			<Employees />
			<Birthdays />
		</div>
	);
};

export default Home;
