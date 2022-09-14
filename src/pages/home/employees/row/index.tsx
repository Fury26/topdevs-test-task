import React from 'react';

import './index.css';

type Props = {
	name: string;
	isActive: boolean;
	id: string;
	toggleIsActive: (isActive: boolean) => any;
};

const Row: React.FC<Props> = ({ name, isActive, toggleIsActive, id }) => {
	return (
		<div className="row">
			<h2>{name}</h2>
			<div className="row-radios">
				<div className="row-radios-line">
					<input
						type="radio"
						id={`${id}notActive`}
						value="notActive"
						checked={!isActive}
						onChange={() => toggleIsActive(false)}
					/>
					<label htmlFor={`${id}notActive`}>Not Active</label>
				</div>
				<div className="row-radios-line">
					<input
						type="radio"
						id={`${id}active`}
						value="active"
						checked={isActive}
						onChange={() => toggleIsActive(true)}
					/>
					<label htmlFor={`${id}active`}>Active</label>
				</div>
			</div>
		</div>
	);
};

export default Row;
