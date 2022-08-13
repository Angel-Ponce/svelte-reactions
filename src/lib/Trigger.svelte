<script context="module" lang="ts">
	import { onMount, type SvelteComponent } from 'svelte/internal';
	import { fly } from 'svelte/transition';
	import { onClickOutside } from './helpers/clickOutside';

	export interface ReactionType {
		reaction: string | typeof SvelteComponent;
		quantity: number;
	}
</script>

<script lang="ts">
	import Reaction from './Reaction.svelte';
	import TriggerIcon from './TriggerIcon.svelte';

	export let reactions: ReactionType[] = [
		{ reaction: '👍', quantity: 10 },
		{ reaction: '😂', quantity: 0 },
		{ reaction: '❤️', quantity: 0 },
		{ reaction: '😮', quantity: 0 },
		{ reaction: '😡', quantity: 0 }
		// { reaction: '🎨', quantity: 0 },
		// { reaction: '😊', quantity: 0 },
		// { reaction: '👌', quantity: 0 },
		// { reaction: '📂', quantity: 0 },
		// { reaction: '😒', quantity: 0 },
		// { reaction: '✌️', quantity: 0 },
		// { reaction: '😅', quantity: 0 },
		// { reaction: '❤️‍🔥', quantity: 0 }
	];

	let active = false;
	let element: HTMLDivElement;

	onMount(() => {
		if (element) {
			element.addEventListener('clickOutside', () => {
				active = false;
			});
		}
	});
</script>

<div class="trigger" on:click={() => (active = !active)} use:onClickOutside bind:this={element}>
	<TriggerIcon width={18} />
	{#if active}
		<div
			class={`reactions-container`}
			transition:fly={{ y: 8, duration: 300 }}
			on:click={(e) => e.stopPropagation()}
		>
			{#each reactions as reaction, index (index)}
				<Reaction
					bind:quantity={reaction.quantity}
					reaction={reaction.reaction}
					on:reactionClicked={() => {
						active = false;
					}}
				/>
			{/each}
		</div>
	{/if}
</div>

<style>
	.trigger {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: fit-content;
		height: auto;
		aspect-ratio: 1 / 1;
		border-radius: 9999px;
		background-color: #f0f0f0;
		padding: 5px;
		cursor: pointer;
		color: #888888;
		transition-duration: 200ms;
	}

	.trigger:hover {
		background-color: #e1e1e1;
	}

	.reactions-container {
		position: absolute;
		top: 100%;
		left: 0%;
		display: flex;
		align-items: center;
		gap: 2px;
		margin: 5px 0px 5px 0px;
		padding: 5px;
		border-radius: 6px;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		max-width: 320px;
		overflow-x: auto;
		cursor: default;
	}
</style>
