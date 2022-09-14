import React, { useCallback, useEffect } from 'react';
import { fetchUsers } from 'requests/users';
import { useAppDispatch } from 'store';
import { setEmployees } from 'store/employees';

const Employees: React.FC = () => {
	const dispatch = useAppDispatch();

	const getUsers = useCallback(async () => {
		const res = await fetchUsers();
		dispatch(setEmployees(res));
	}, [dispatch]);

	useEffect(() => {
		getUsers();
	}, [getUsers]);

	return <div className="home">Employees</div>;
};

export default Employees;
