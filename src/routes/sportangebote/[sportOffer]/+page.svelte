<script>
	export const prerender = true;

	import { page } from '$app/stores';

	const sportOffer = $page.params.sportOffer;

	const sportOffersObject = {
		title: 'Volleyball',
		description:
			'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
		departmentLead: {
			id: '10hr23r',
			name: 'Jens Zimmer',
			profilePictureURL: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
			phoneNumber: '+49 1234 5678910',
			email: 'jens.zimmer@sv-koweg.de'
		},
		teams: [
			{
				name: '1. Männermannschaft',
				url: '/sportangebote/volleyball/maenner-1',
				teamImageUrl: 'https://picsum.photos/350/200?random=2'
			},
			{
				name: '1. Frauenmannschaft',
				url: '/sportangebote/volleyball/frauen-1',
				teamImageUrl: 'https://picsum.photos/350/200?random=1'
			}
		]
	};

	const blogPostsPreviews = [
		{
			category: 'Volleyball',
			uploadedAt: new Date('2023-09-07'),
			title: 'Test Blog Post 1',
			url: '/news/volleyball/test-blog-post-1'
		},
		{
			category: 'Volleyball',
			uploadedAt: new Date('2023-09-08'),
			title: 'Test Blog Post 2',
			url: '/news/volleyball/test-blog-post-2'
		},
		{
			category: 'Volleyball',
			uploadedAt: new Date('2023-09-09'),
			title: 'Test Blog Post 3',
			url: '/news/volleyball/test-blog-post-3'
		}
	];

	const events = [
		{
			title: 'Event 1',
			date: new Date('2023-10-2'),
			url: '/events/volleyball/event-1'
		}
	];
</script>

<div class="flex flex-col space-y-6">
	<h1 class="text-4xl font-bold">{sportOffersObject.title}</h1>
	<p class="text-lg">{sportOffersObject.description}</p>
	<div class="flex bg-[#161a4e] text-white p-6 w-fit space-x-6 rounded">
		<div class="flex justify-center items-center w-1/5">
			<img
				class="rounded"
				src={sportOffersObject.departmentLead.profilePictureURL}
				alt={'Profilbild von ' + sportOffersObject.departmentLead.name}
			/>
		</div>
		<div class="flex flex-col">
			<h3 class="text-xl font-semibold">{sportOffersObject.departmentLead.name}</h3>
			<span>Abteilungsleiter</span>
			<span>{sportOffersObject.departmentLead.phoneNumber}</span>
			<span>{sportOffersObject.departmentLead.email}</span>
		</div>
	</div>
	<h2 class="text-2xl font-semibold">Unsere Mannschaften</h2>
	<div class="flex space-x-12">
		{#each sportOffersObject.teams as team}
			<div class="bg-[#161a4e] text-white rounded">
				<div class="max-w-1/2 h-fit">
					<img class="rounded-t" src={team.teamImageUrl} alt="" />
				</div>
				<div class="p-6 flex justify-center items-center">
					<a href={team.url} class="text-center font-medium text-xl">
						{team.name}
					</a>
				</div>
			</div>
		{/each}
	</div>
	<h2 class="text-2xl font-semibold">Aktuelles</h2>
	<div class="flex flex-col divide-y">
		{#each blogPostsPreviews as preview}
			<div class="flex flex-col my-1">
				<div class="flex pt-1 space-x-3 items-center">
					<span>{preview.category}</span>
					<span>|</span>
					<span>Hochgeladen am {preview.uploadedAt.toLocaleDateString()}</span>
				</div>
				<a href={preview.url} class="mt-1 text-xl">{preview.title}</a>
			</div>
		{/each}
	</div>
</div>
