<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const routes = [
		{
			label: 'Unser Verein',
			route: '/'
		},
		{
			label: 'Sportangebot',
			route: '/sportangebote',
			subroutes: [
				{
					label: 'Volleyball',
					route: '/sportangebote/volleyball'
				}
			]
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

	let isDropdownOpen = false;

	console.log(routes[0].subroutes);

	const handleHover = () => {
		isDropdownOpen = !isDropdownOpen;
	};
</script>

<header class="top-0 left-0 w-full h-fit bg-white z-50 sticky flex px-64 py-6">
	<div class="w-24 h-fit">
		<img src="/sv-koweg-logo.png" alt="SV Koweg Logo" />
	</div>

	<ul class="flex items-center space-x-6 ml-auto">
		{#each routes as route}
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->

			<li
				class:relative={route.subroutes}
				on:mouseover={(e) => {
					if (route.subroutes) {
						isDropdownOpen = true;
					}
				}}
				on:mouseleave={(e) => {
					if (route.subroutes) {
						if (document.elementFromPoint(e.clientX, e.clientY)?.id == 'dropdown') {
							return;
						}
						isDropdownOpen = false;
					}
				}}
			>
				<a class="group transition duration-300 font-semibold text-lg uppercase" href={route.route}>
					{route.label}
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"
					/>
				</a>
				{#if route.subroutes}
					{#if isDropdownOpen}
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							on:mouseleave={(e) => {
								if (route.subroutes) {
									// if ()
									isDropdownOpen = false;
								}
							}}
							id="dropdown"
							class="pt-10 w-full absolute top-0 left-0"
						>
							<ul
								transition:slide
								class="bg-white shadow-lg border-t-[3px] border-accent p-3 w-full"
							>
								{#each route.subroutes as subroute}
									<li>
										<a class="text-lg" href={subroute.route}>{subroute.label}</a>
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				{/if}
			</li>
		{/each}
	</ul>
</header>
