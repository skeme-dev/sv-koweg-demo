<script lang="ts">
	import Button from '../../ui/button/button.svelte';
	import * as Dialog from '../../ui/dialog';
	import { Input } from '../../ui/input/index';
	import { Label } from '../../ui/label/index';
</script>

<header class="bg-white w-screen flex justify-between py-6 px-12 border-b-2">
	<div class="flex items-center space-x-6">
		<Button size="icon" class="rounded-full">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
			</svg>
		</Button>
		<h1 class="text-xl font-semibold">Neuer Blogeintrag</h1>
	</div>
	<div class="space-x-3">
		<Button variant="ghost">
			<i class="text-lg ri-eye-line mr-2" />
			Vorschau
		</Button>
		<Dialog.Root>
			<Dialog.Trigger>
				<Button>
					<i class="text-lg ri-save-line mr-2" />
					Speichern
				</Button>
			</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>Bericht speichern</Dialog.Title>
					<Dialog.Description>
						Schließe die Erstellung eines Berichts ab, indem du folgende Informationen
						vervollständigst.
					</Dialog.Description>
				</Dialog.Header>
				<div class="grid gap-4 py-4">
					<div class="grid grid-cols-4 items-center gap-4">
						<Label for="name" class="text-right">Titel</Label>
						<Input id="name" placeholder="Pedro Duarte" class="col-span-3" />
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<Label for="username" class="text-right">Beschreibung</Label>
						<Input id="username" placeholder="@peduarte" class="col-span-3" />
					</div>
				</div>
			</Dialog.Content>
			<Dialog.Footer>
				<Button />
			</Dialog.Footer>
		</Dialog.Root>
	</div>
</header>
