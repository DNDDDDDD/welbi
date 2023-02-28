import { get } from '../config/api';
import { Resident } from '../types';

export const ResidentAPI = {
    getResidents: async () => {
        const { data: residents } = await get('/residents');
        return residents as Resident[];
    }
}