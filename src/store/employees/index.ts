import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Employee } from './types';

type State = {
	employees: Employee[];
};

const initialState: State = {
	employees: [],
};

const employeesSlice = createSlice({
	name: 'employess',
	initialState,
	reducers: {
		setEmployees: (state, action: PayloadAction<Employee[]>) => {
			state.employees = action.payload;
		},
	},
});

export const { setEmployees } = employeesSlice.actions;

export default employeesSlice;
