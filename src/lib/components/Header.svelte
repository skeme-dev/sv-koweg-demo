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
			route: '/service',
			subroutes: [
				{
					label: 'Downloads',
					route: '/service/downloads'
				}
			]
		},
		{
			label: 'Kontakt',
			route: '/kontakt'
		}
	];

	let isDropdownOpen = false;
	let activeDropdown = {
		index: 0,
		isActive: false
	};
</script>

<header class="top-0 left-0 w-full h-fit bg-white z-50 sticky flex px-64 py-6">
	<div class="w-24 h-fit">
		<img src="/sv-koweg-logo.png" alt="SV Koweg Logo" />
	</div>

	<ul class="flex items-center space-x-6 ml-auto">
		{#each routes as route, index}
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->

			<li
				class:relative={route.subroutes}
				class:z-10={!route.subroutes}
				on:mouseover={(e) => {
					if (route.subroutes) {
						activeDropdown.index = index;
						activeDropdown.isActive = true;
					}
				}}
				on:mouseleave={(e) => {
					if (route.subroutes) {
						if (document.elementFromPoint(e.clientX, e.clientY)?.id == 'dropdown') {
							return;
						}
						activeDropdown.index = 0;
						activeDropdown.isActive = false;
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
					{#if activeDropdown.index == index && activeDropdown.isActive}
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							on:mouseleave={(e) => {
								if (route.subroutes) {
									activeDropdown.index = 0;
									activeDropdown.isActive = false;
								}
							}}
							id="dropdown"
							class="pt-10 w-[10vw] absolute top-0 left-0"
						>
							<div
								transition:slide
								class="bg-white shadow-lg border-t-[3px] border-accent p-3 w-full"
							>
								{#each route.subroutes as subroute}
									<a
										class="transition-[200ms] hover:text-accent block w-full h-full text-lg"
										href={subroute.route}
									>
										<span>{subroute.label}</span>
									</a>
								{/each}
							</div>
						</div>
					{/if}
				{/if}
			</li>
		{/each}
	</ul>
</header>
