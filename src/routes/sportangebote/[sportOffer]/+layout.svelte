<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import SiteMap from '$lib/components/SiteMap.svelte';

	const arr = $page.url?.pathname.split('/');

	// Remove first "/" from array
	arr.shift();

	function getStringForBreadcrumb(arr: string[]) {
		let outputArray: string[] = [];
		arr.forEach((arrElement) => {
			const capitalizedLetter = arrElement.charAt(0).toUpperCase();
			if (arrElement.includes('ss')) {
				arrElement.replace('ss', 'ß');
			}
			let arr2 = arrElement.split('');
			arr2.shift();
			arr2.unshift(capitalizedLetter);
			outputArray.push(arr2.join(''));
		});
		return outputArray;
	}

	let arr2 = getStringForBreadcrumb(arr);

	function getLinkForSubpage(index: number): string {
		let outputString: string = '/';
		for (let i = 0; i < index + 1; i++) {
			const element = arr[i];
			console.log(element);
			outputString += element + '/';
		}
		return outputString;
	}

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
<div class="w-full h-[40vh] bg-red-300" />
<main class="px-64 py-12 flex flex-col">
	<div class="text-lg mb-12">
		<span class="mr-6">Sie befinden Sich hier:</span>
		{#each arr2 as elem, index}
			<a href={getLinkForSubpage(index)}>
				{elem.replace('ss', 'ß')}
			</a>
			{#if index !== getStringForBreadcrumb(arr).length - 1}
				<span class="mx-1"> > </span>
			{/if}
		{/each}
	</div>
	<div class="flex space-x-12">
		<div class="flex flex-col w-1/4 space-y-24">
			<SiteMap
				label="Unsere Sportangebote:"
				sitemap={[
					{
						label: 'Fußball',
						url: '/sportangebote/fussball/'
					},
					{ label: 'Volleyball', url: '/sportangebote/volleyball' }
				]}
			/>
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
