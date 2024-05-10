import { error, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = async ({ locals: { getSession }, route }) => {
	const session = await getSession();

	console.log(route);

	if (!session && route.id !== '/dashboard/login') {
		throw redirect(303, '/dashboard/login');
		// console.log('test');
	}

	return {
		session: session
	};
};
