<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const routes = [
		{
			label: 'Unser Verein',
			route: '/'
		},
		{
			label: 'Sportangebot',
			route: '/sportangebote'
		},
		{
			label: 'Sponsoren',
			route: '/sponsoren'
		},
		{
			label: 'Fanshop',
			route: '/fanshop'
		},
		{
			label: 'Sportlerklause',
			route: '/sportlerklause'
		},
		{
			label: 'Service',
			route: '/service'
		},
		{
			label: 'Kontakt',
			route: '/kontakt'
		}
	];
</script>

<header class="top-0 left-0 w-full h-fit bg-white z-50 sticky flex px-64 py-6">
	<div class="w-24 h-fit">
		<img src="/sv-koweg-logo.png" alt="SV Koweg Logo" />
	</div>

	<ul class="flex items-center space-x-6 ml-auto">
		{#each routes as route}
			<li>
				<a class="group transition duration-300 font-semibold text-lg uppercase" href={route.route}>
					{route.label}
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"
					/>
				</a>
			</li>
		{/each}
	</ul>
</header>
