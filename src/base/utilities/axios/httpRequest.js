import axios from 'axios';
const request = axios.create({
	baseURL: 'https://localhost:44332/api/',
});

export const getAysnc = async (path, payload, options) => {
	return request.get(path, { params: payload, ...options });
};
export const postAysnc = async (path, options) => {
	return request.post(path, options);
};
