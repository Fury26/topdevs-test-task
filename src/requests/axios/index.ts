import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://topdevsprojects.org/',
	timeout: 1000,
});

export default axiosInstance;
