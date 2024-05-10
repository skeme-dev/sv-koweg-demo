import type { HandleServerError } from '@sveltejs/kit';

export function handleError<HandleServerError>({ error, event }) {
	return {
		code: !event.route.id ? 404 : 500
	};
}
