import {get} from '../config/api';
import {type Resident} from '../types';

type Data = {
	data: Resident[];
};

export const residentApi = {
	async getResidents() {
		const {data: residents}: Data = await get('/residents');
		return residents;
	},
};
