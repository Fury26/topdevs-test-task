import { Employee } from '../store/employees/types';
import axiosInstance from './axios';

export const fetchEmployees = async () => {
	return await axiosInstance.get<Employee[]>('/tasks/users');
};
