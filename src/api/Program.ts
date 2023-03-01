import {get} from '../config/api';
import {type Program} from '../types';

export const programApi = {
	async getPrograms() {
		const {data}: {data: Program[]} = await get('/programs');
		return data;
	},
};
