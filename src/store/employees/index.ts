import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEmployees } from 'requests/employess';
import { AppDispatch } from 'store';
import { FetchCallbacks } from 'store/types';

import { Employee } from './types';

type State = {
	employees: Employee[];
	isLoading: boolean;
};

const initialState: State = {
	employees: [],
	isLoading: false,
};

const employeesSlice = createSlice({
	name: 'employess',
	initialState,
	reducers: {
		setEmployees: (state, action: PayloadAction<Employee[]>) => {
			state.employees = action.payload;
		},
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setIsActive: (state, action: PayloadAction<{ id: string; isActive: boolean }>) => {
			const { id, isActive } = action.payload;
			const findIndex = state.employees.findIndex((e) => e.id === id);

			if (findIndex === -1 || state.employees[findIndex].isActive === isActive) {
				return;
			}
			state.employees[findIndex].isActive = isActive;
		},
	},
});

export const { setEmployees, setIsLoading, setIsActive } = employeesSlice.actions;

export const getEmployees =
	({ success, error }: FetchCallbacks = {}) =>
	async (dispatch: AppDispatch) => {
		dispatch(setIsLoading(true));
		const res = await fetchEmployees();
		dispatch(setIsLoading(false));

		if (res.data) {
			dispatch(setEmployees(res.data));
			success && success();
		} else {
			error && error();
		}
		return res;
	};

export default employeesSlice;
