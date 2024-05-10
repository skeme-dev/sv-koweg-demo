<script lang="ts">
	import Button from '$lib/components/dashboard/ui/button/button.svelte';
	import { Plus } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const teams = [
		{
			label: '1. Männermannschaft',
			teamImageUrl:
				'https://www.sgplatjenwerbe.de/_cache/images/cms/Veranstaltungen/.eea67c2ad402cb506bbdc8e4ee68c166/U15.jpg',
			url: '/dashboard/teams/maenner-1'
		},
		{
			label: '3. Männermannschaft',
			teamImageUrl:
				'https://www.sgplatjenwerbe.de/_cache/images/cms/Veranstaltungen/.eea67c2ad402cb506bbdc8e4ee68c166/U15.jpg',
			url: '/dashboard/teams/maenner-1'
		},
		{
			label: '2. Männermannschaft',
			teamImageUrl:
				'https://www.sgplatjenwerbe.de/_cache/images/cms/Veranstaltungen/.eea67c2ad402cb506bbdc8e4ee68c166/U15.jpg',
			url: '/dashboard/teams/maenner-1'
		}
	];
</script>

<div class="w-full flex flex-col">
	<div class="flex flex-col space-y-3 mb-12">
		<h1 class="text-3xl font-semibold">Volleyball</h1>
		<h3 class="font-medium text-gray-500">Verwalte die Seite der Volleyball-Abteilung</h3>
	</div>
	<!-- <img
		class="w-3/4 rounded-xl"
		src="https://media.gettyimages.com/id/1371823675/photo/bad-shot.jpg?s=2048x2048&w=gi&k=20&c=FvvMjmtc2HJrSiu0e85dUyu4HDVutSfdJeDCuXdx0QE="
		alt=""
	/> -->

	<div class="flex flex-col w-full divide-y-2 space-y-12">
		<div class="flex w-full border-t-2 pt-6">
			<div class="w-1/3">
				<h1 class="font-semibold text-lg">Beschreibung</h1>
			</div>
			<div class="w-3/5">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id veritatis voluptas unde
					laboriosam accusantium molestias, blanditiis vel accusamus porro adipisci.
				</p>
			</div>
			<div class="w-1/12 flex justify-end items-center">
				<Button variant="outline" size="icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-4 h-4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
						/>
					</svg>
				</Button>
			</div>
		</div>
		<div class="flex w-full border-t-2 pt-6">
			<div class="w-1/3">
				<h1 class="font-semibold text-lg">Mannschaften</h1>
			</div>
			<div class="w-3/5 grid grid-cols-2 gap-6">
				{#each teams as team}
					<div class="flex flex-col space-y-6 rounded-xl border-2 p-6 w-full">
						<!-- <img class="rounded-lg w-2/3" src={team.teamImageUrl} alt={team.label} /> -->
						<div class="w-fit bg-black rounded-full p-3 flex justify-center items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="white"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
								/>
							</svg>
						</div>

						<h1 class="text-xl font-semibold">{team.label}</h1>
						<div class="flex justify-end items-center">
							<!-- <Button variant="outline" size="icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-4 h-4"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
									/>
								</svg>
							</Button> -->
							<Button>
								<!-- <svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-4 h-4 mr-2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
									/>
								</svg> -->

								Ansehen
							</Button>
						</div>
					</div>
				{/each}
			</div>
			<div class="w-1/12 flex flex-col space-y-3 justify-start items-end">
				<Button variant="default" size="icon">
					<Plus class="stroke-white h-5 w-5" />
				</Button>
				<Button variant="outline" size="icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-4 h-4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
						/>
					</svg>
				</Button>
			</div>
		</div>
	</div>
</div>
