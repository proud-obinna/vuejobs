import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonserver-production-b98b.up.railway.app/jobs',
});

export default axiosInstance;