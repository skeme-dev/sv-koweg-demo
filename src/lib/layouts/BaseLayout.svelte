<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import SiteMap from '$lib/components/SiteMap.svelte';

	export let isBreadcrumbActive: boolean = true;
	export let isSitemapActive: boolean = true;

	export let sitemapOptions = {
		label: 'Weitere Seiten',
		sitemapObject: {}
	};

	const events = [
		{
			title: 'Event 1',
			date: new Date('2023-10-2'),
			url: '/events/volleyball/event-1'
		},
		{
			title: 'Event 2',
			date: new Date('2023-10-3'),
			url: '/events/volleyball/event-2'
		},
		{
			title: 'Event 3',
			date: new Date('2023-10-4'),
			url: '/events/volleyball/event-3'
		}
	];
</script>

<Header />
<div class="w-full h-[40vh] bg-img" />
<main class="px-64 py-12 flex flex-col">
	{#if isBreadcrumbActive}
		<Breadcrumb />
	{/if}
	<div class="flex space-x-12">
		<div class="flex flex-col w-1/4 space-y-24">
			{#if isSitemapActive}
				<SiteMap
					label={sitemapOptions.label}
					sitemap={[
						{
							label: 'Fußball',
							url: '/sportangebote/fussball/'
						},
						{ label: 'Volleyball', url: '/sportangebote/volleyball' }
					]}
				/>
			{/if}
			<div class="flex flex-col">
				<h1 class="text-xl font-semibold mb-3">Aktuelle Events</h1>
				<div class="flex flex-col divide-y">
					{#each events as event}
						<a href={event.url} class="text-lg py-3">
							<span class="mr-2 text-base">{event.date.toLocaleDateString()}:</span>
							<span class="font-semibold">{event.title}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>
		<slot />
	</div>
</main>
<Footer />

<style>
	.bg-img {
		background-image: url('https://picsum.photos/1800/500?random=1');
		background-size: cover;
		background-position: center;
	}
</style>
