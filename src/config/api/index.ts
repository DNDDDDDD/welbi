import axios, {type AxiosHeaders} from 'axios';
import {API_URL} from '../../constants';

const apiClient = axios.create({
	// eslint-disable-next-line @typescript-eslint/naming-convention
	baseURL: API_URL,
});

apiClient.interceptors.request.use(config => {
	(config.headers as AxiosHeaders).set('Authorization', `Bearer ${localStorage.getItem('token') ?? ''}`);
	console.log(config);

	return ({
		...config,
	});
},
async error => Promise.reject(error),
);

apiClient.interceptors.response.use(response =>
	response,
async error => Promise.reject(error.response.data),
);

const {get, post, put, delete: destroy} = apiClient;
export {get, post, put, destroy};
