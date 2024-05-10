<script lang="ts">
	import { Role, type Department } from '@prisma/client';
	import type { PageData } from './$types';

	import { createTable, Subscribe, Render, createRender } from 'svelte-headless-table';

	import {
		addSortBy,
		addPagination,
		addTableFilter,
		addSelectedRows,
		addHiddenColumns
	} from 'svelte-headless-table/plugins';

	import { readable } from 'svelte/store';
	import * as Table from '$lib/components/dashboard/ui/table';
	import Badge from '$lib/components/dashboard/ui/badge/badge.svelte';
	import Button from '$lib/components/dashboard/ui/button/button.svelte';
	import { Plus } from 'lucide-svelte';

	type User = {
		name: string;
		email: string;
		role: Role;
		department: Department | string;
	};

	const users = readable<User[]>([
		{
			name: 'John Doe',
			email: 'john.doe@skeme.dev',
			department: 'Volleyball',
			role: Role.USER
		},
		{
			name: 'Jane Doe',
			email: 'jane.doe@skeme.dev',
			department: 'Volleyball',
			role: Role.ADMIN
		}
	]);

	const table = createTable(users);

	const columns = table.createColumns([
		table.column({
			accessor: 'name',
			header: 'Name'
		}),
		table.column({
			accessor: 'email',
			header: 'E-Mail'
		}),
		table.column({
			accessor: 'department',
			header: 'Abteilung'
		}),
		table.column({
			accessor: 'role',
			header: 'Rolle',
			cell: ({ value }) => {
				switch (value) {
					case 'USER':
						return 'Benutzer';

					case 'ADMIN':
						return 'Administrator';
					case 'TRAINER':
						return 'Trainer';
					case 'LEADER':
						return 'Abteilungsleiter';
					default:
						break;
				}
			}
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs } = table.createViewModel(columns);
</script>

<div class="flex flex-col w-full">
	<div class="flex justify-between items-center">
		<div class="flex flex-col space-y-3">
			<h1 class="text-3xl font-semibold">Benutzer</h1>
			<h3>Verwalte alle Benutzer dieser Anwendung</h3>
		</div>
		<Button>
			<Plus class="stroke-white mr-2 h-4 w-4" />
			Benutzer hinzufügen
		</Button>
	</div>
	<div class="mt-12">
		<Table.Root class="w-full" {...$tableAttrs}>
			<Table.Header>
				{#each $headerRows as headerRow}
					<Subscribe rowAttrs={headerRow.attrs()}>
						<Table.Row>
							{#each headerRow.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()}>
									<Table.Head {...attrs}>
										<Render of={cell.render()} />
									</Table.Head>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Header>
			<Table.Body {...$tableBodyAttrs}>
				{#each $pageRows as row (row.id)}
					<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
						<Table.Row {...rowAttrs}>
							{#each row.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs>
									<Table.Cell {...attrs}>
										{#if cell.id == 'role'}
											<Badge variant="secondary">
												<Render of={cell.render()} />
											</Badge>
										{:else}
											<Render of={cell.render()} />
										{/if}
									</Table.Cell>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</div>
