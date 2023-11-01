<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { get } from 'svelte/store';
	import { dimensions } from '$lib';
	import { screenWidth } from '$lib/stores/screenDimensionStore';

	const screenDimension = get(screenWidth);

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

	let isHamburgerMenuOpen = false;
	let activeDropdown = {
		index: 0,
		isActive: false
	};

	function toggleHamburgerMenu() {
		isHamburgerMenuOpen = !isHamburgerMenuOpen;
	}

	function maybe(node, options) {
		if (isHamburgerMenuOpen) {
			return options.fn(node, options);
		}
	}
</script>

<nav class="sticky top-0 left-0 z-20">
	<header class=" md:w-full h-fit bg-white z-50 sticky flex md:px-64 px-8 py-6">
		<div class="md:w-24 w-16 h-fit">
			<img src="/sv-koweg-logo.png" alt="SV Koweg Logo" />
		</div>

		<ul class="md:flex hidden md:flex-row flex-col items-center space-x-6 ml-auto">
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
					<a
						class="group transition duration-300 font-semibold text-lg uppercase"
						href={route.route}
					>
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
		<div class="md:hidden flex justify-center items-center ml-auto">
			<button on:click={toggleHamburgerMenu} class="p-2">
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
					><path
						stroke="rgba(0, 0, 0, 0.5)"
						stroke-linecap="round"
						stroke-miterlimit="10"
						stroke-width="2"
						d="M4 7h22M4 15h22M4 23h22"
					/></svg
				>
			</button>
		</div>
	</header>
	{#if isHamburgerMenuOpen}
		<div transition:slide class="bg-white px-8 pb-4 md:hidden flex flex-1 w-full">
			<ul class="flex flex-col ml-auto items-end space-y-1">
				{#each routes as route, index}
					<!-- svelte-ignore a11y-mouse-events-have-key-events -->

					<li class="flex flex-col">
						{#if route.subroutes}
							<button
								on:click={(e) => {
									if (!(activeDropdown.index == index && activeDropdown.isActive)) {
										activeDropdown.index = index;
										activeDropdown.isActive = true;
									} else {
										activeDropdown.index = 0;
										activeDropdown.isActive = false;
									}
								}}
								class="text-right font-semibold text-lg uppercase">{route.label}</button
							>
						{:else}
							<a
								class="group transition duration-300 font-semibold text-lg uppercase"
								href={route.route}
							>
								{route.label}
							</a>
						{/if}
						{#if activeDropdown.index == index && activeDropdown.isActive}
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<ul class="flex justify-end items-end py-2" transition:slide>
								<li class="bg-white w-full">
									{#each route.subroutes as subroute}
										<a class="text-right block w-full h-full text-lg" href={subroute.route}>
											<span>{subroute.label}</span>
										</a>
									{/each}
								</li>
							</ul>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>
