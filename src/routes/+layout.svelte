<script>
	import { onMount } from 'svelte';

	import { screenWidthWriteable } from '$lib/stores/screenDimensionStore';
	import { page } from '$app/stores';

	onMount(() => {
		screenWidthWriteable.set(document.documentElement.clientWidth);
	});

	if ($page.url.pathname.includes('dashboard')) {
		import('../dashboard.css');
		import('remixicon/fonts/remixicon.css');
	} else {
		import('../app.css');
	}
</script>

<slot />
