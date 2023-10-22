<script lang="ts">
	interface Site {
		label: string;
		url: string;
	}

	export let sitemap: Site[];
	export let label: string;
</script>

<div class="flex flex-col w-full">
	<h1 class="mb-3 font-semibold text-xl">{label}</h1>
	<ul class="divide-y space-y-1">
		{#each sitemap as item}
			<li>
				<a class="uppercase text-lg text-gray-500" href={item.url}>{item.label}</a>
			</li>
		{/each}
	</ul>
</div>
