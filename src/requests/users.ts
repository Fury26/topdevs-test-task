import { Employee } from '../store/employees/types';
import axiosInstance from './axios';

export const fetchUsers = async () => {
	return (await axiosInstance.get<Employee[]>('/tasks/users')).data;
};
