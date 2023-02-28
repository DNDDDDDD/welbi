import { post } from '../config/api';

export const User = {
    login: (email: string) => { 
        post('/start', { email: email, })
            .then(data => data.data)
            .then(({ token }) => localStorage.setItem('token', token))
            .catch(e => console.log(e.message));
    }
};