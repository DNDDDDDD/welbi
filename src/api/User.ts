import {post} from '../config/api';
import type {User as UserInterface} from '../types';

export const userApi = {
	async login(email: string) {
		try {
			const {data: {token}}: {data: UserInterface} = await post('/start', {email});
			localStorage.setItem('token', token);
		} catch (e) {
			console.log(e);
		}
	},
};
