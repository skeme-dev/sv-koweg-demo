<script lang="ts">
	import type { PageData } from './$types';

	import Editor from '$lib/components/dashboard/components/editor/Editor.svelte';

	export let data: PageData;
</script>

<div class="w-screen flex flex-col items-center">
	<Editor />
</div>
