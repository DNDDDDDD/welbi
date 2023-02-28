import { get } from '../config/api';
import { Program } from '../types';

export const ProgramAPI = {
    getPrograms: async () => {
        const { data: programs } = await get('/programs');
        return programs as Program[];
    }
}