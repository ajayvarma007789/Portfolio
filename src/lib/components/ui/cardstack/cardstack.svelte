<script lang="ts">
	import { onMount } from 'svelte';
	import { Motion } from 'svelte-motion';

	type Card = {
		id: number;
		name: string;
		designation: string;
		content: string;
	};

	export let items: Card[];
	export let offset: number | undefined = undefined;
	export let scaleFactor: number | undefined = undefined;

	let interval: any;
	const CARD_OFFSET = offset || 16;
	const SCALE_FACTOR = scaleFactor || 0.06;
	let cards: Card[] = items;

	onMount(() => {
		startFlipping();
	});

	const startFlipping = () => {
		interval = setInterval(() => {
			const newArray = [...cards]; // create a copy of the array
			newArray.unshift(newArray.pop()!); // move the last element to the front
			cards = newArray;
		}, 5000);

		return () => clearInterval(interval);
	};
</script>

<div class="relative h-[400px] w-[400px] md:h-[400px] md:w-[600px]">
	{#each cards as card, index (card.id)}
		<Motion
			let:motion
			style={{
				transformOrigin: 'top center'
			}}
			animate={{
				top: index * -CARD_OFFSET,
				scale: 1 - index * SCALE_FACTOR,
				zIndex: cards.length - index
			}}
		>
			<div
				use:motion
				class="absolute flex h-[300px] w-[400px] flex-col justify-between rounded-3xl border border-gray-700 bg-black/50 backdrop-blur-lg p-6 shadow-xl shadow-black/[0.1] md:h-[300px] md:w-[500px]"
			>
				<div class="font-normal text-white text-lg">
					{@html card.content}
				</div>
				<div>
					<p class="font-medium text-white text-xl">
						{card.name}
					</p>
					<p class="font-normal text-gray-400">
						{card.designation}
					</p>
				</div>
			</div>
		</Motion>
	{/each}
</div>

<style>
	.highlight {
		@apply bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500;
	}
</style>