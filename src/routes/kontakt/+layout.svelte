<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import SiteMap from '$lib/components/SiteMap.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<Header />
<div class="w-full h-[40vh] bg-red-300" />
<main class="px-64 py-12 flex flex-col">
	<!-- <div class="text-lg mb-6">
		<span class="mr-6">Sie befinden Sich hier:</span>
		{#each arr2 as elem, index}
			<a href={getLinkForSubpage(index)}>
				{elem.replace('ss', 'ß')}
			</a>
			{#if index !== getStringForBreadcrumb(arr).length - 1}
				<span class="mx-1"> > </span>
			{/if}
		{/each}
	</div> -->
	<div class="flex space-x-12">
		<div class="flex flex-col w-1/4 space-y-24">
			<SiteMap
				label="Kontakt"
				sitemap={[
					{
						label: 'Fußball',
						url: '/sportangebote/fussball/'
					},
					{ label: 'Volleyball', url: '/sportangebote/volleyball' }
				]}
			/>
		</div>

		<slot />
	</div>
</main>
<Footer />
