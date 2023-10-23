export function handleError({ error, event }) {
	return {
		message:
			error?.code === 404
				? 'Die angeforderte Seite konnte nicht gefunden werden.'
				: 'Ein interner Fehler ist aufgetreten',
		code: error?.code ?? 'Unbekannt'
	};
}
