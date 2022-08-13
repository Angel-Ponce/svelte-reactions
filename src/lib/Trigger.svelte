<script context="module" lang="ts">
	import type { SvelteComponent } from 'svelte/internal';

	export interface ReactionType {
		reaction: string | typeof SvelteComponent;
		quantity: number;
	}
</script>

<script lang="ts">
	import Reaction from './Reaction.svelte';
	import TriggerIcon from './TriggerIcon.svelte';

	export let reactions: ReactionType[] = [
		{ reaction: '👍', quantity: 0 },
		{ reaction: '😂', quantity: 0 },
		{ reaction: '❤️', quantity: 0 },
		{ reaction: '😮', quantity: 0 },
		{ reaction: '😡', quantity: 0 }
	];
</script>

<div class="trigger" tabindex="0">
	<TriggerIcon width={18} />
	<div class="reactions-container">
		{#each reactions as reaction, index (index)}
			<Reaction bind:quantity={reaction.quantity} reaction={reaction.reaction} />
		{/each}
	</div>
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
	}
</style>
