import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonserver.pxxl.xyz/jobs',
});

export default axiosInstance;