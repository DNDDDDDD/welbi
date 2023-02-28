import { post } from '../config/api';
import { User as UserInterface } from '../types';

export const User = {
    login: async (email: string) => { 
        try {
            const { token } = await post('/start', { email: email, }) as UserInterface;
            localStorage.setItem('token', token);
        }
        catch(e) {
            console.log(e);
        } 
    },
};