import {get} from '../config/api';
import {type Resident} from '../types';

export const residentApi = {
	async getResidents() {
		const {data: residents}: {data: Resident[]} = await get('/residents');
		return residents;
	},
};
