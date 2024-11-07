import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const authService = {
    login: async (email, password) => {
        const response = await axios.post(`${API_URL}/auth/login`, { email, password });
        return response.data.token;
    },
    register: async (email, password) => {
        await axios.post(`${API_URL}/auth/register`, { email, password });
    }
};

export default authService;
