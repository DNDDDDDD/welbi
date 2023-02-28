import {get} from '../config/api';
import {type Program} from '../types';

type Data = {
	data: Program[];
};

export const programApi = {
	async getPrograms() {
		const {data}: Data = await get('/programs');
		return data;
	},
};
