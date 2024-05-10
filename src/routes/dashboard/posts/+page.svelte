<script lang="ts">
	import Badge from '$lib/components/dashboard/ui/badge/badge.svelte';
	import Button from '$lib/components/dashboard/ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/dashboard/ui/dropdown-menu';
	import type { PageData } from './$types';

	export let data: PageData;
	const berichte = [
		{
			title: 'Nicht schon wieder verloren!',
			published: true,
			imageUrl: 'https://www.imageen.com/graphics/info/sunset_ocean_tree.jpg',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consequatur beatae at ut distinctio molestiae!'
		}
	];

	let published = true;
</script>

<div class="w-full h-full flex flex-col">
	<div class="flex flex-col space-y-3 mb-6">
		<h1 class="text-3xl font-semibold">Berichte</h1>
		<h3 class="font-medium text-gray-500">Erstelle und verwalte deine Berichte</h3>
	</div>
	<div class="flex flex-col">
		<h2 class="font-medium mb-3">Meine Berichte</h2>
		<div class="grid grid-cols-3">
			{#each berichte as bericht}
				<div class="flex flex-col rounded-xl bg-gray-100">
					<div class="">
						<img class="rounded-xl" src={bericht.imageUrl} alt="" />
					</div>
					<div class="p-6 space-y-3">
						<div class="flex justify-between">
							<h1 class="text-lg font-semibold">{bericht.title}</h1>
							<div class="">
								{#if bericht.published}
									<Badge>Öffentlich</Badge>
								{/if}
							</div>
						</div>
						<p>{bericht.description}</p>
						<div class="flex justify-end">
							<DropdownMenu.Root>
								<DropdownMenu.Trigger>
									<Button variant="outline">
										<i class="text-lg ri-pencil-line" />
										<p class="ml-3">Bearbeiten</p>
									</Button>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content>
									<DropdownMenu.Group>
										<DropdownMenu.Label>Bericht bearbeiten</DropdownMenu.Label>
										<DropdownMenu.Separator />
										<DropdownMenu.Item on:click={() => alert('test')}
											>Inhalt bearbeiten</DropdownMenu.Item
										>
										<DropdownMenu.Item>
											<i class="ri-delete-bin-line" />
											<p class="ml-2">Löschen</p>
										</DropdownMenu.Item>

										<DropdownMenu.Separator />
										<DropdownMenu.CheckboxItem bind:checked={published}>
											Öffentlich
										</DropdownMenu.CheckboxItem>
									</DropdownMenu.Group>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
