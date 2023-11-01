<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { screenWidthWriteable } from '$lib/stores/screenDimensionStore';

	onMount(() => {
		screenWidthWriteable.set(document.documentElement.clientWidth);
	});
</script>

<slot />
