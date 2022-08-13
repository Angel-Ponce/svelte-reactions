<script lang="ts">
	import type { ReactionType } from './Trigger.svelte';
	import { createEventDispatcher } from 'svelte/internal';

	export let reactions: ReactionType[];

	const dispatch = createEventDispatcher();

	const handleLabelClick = (reactionIndex: number) => {
		let clickedReaction = reactions[reactionIndex];

		if (clickedReaction) {
			clickedReaction.clicked = !clickedReaction.clicked;
			if (clickedReaction.clicked) {
				clickedReaction.quantity++;
			} else {
				clickedReaction.quantity--;
			}

			reactions = reactions.map((reaction, index) => {
				if (index == reactionIndex) {
					return clickedReaction;
				}
				return reaction;
			});

			dispatch('labelClicked', { reaction: clickedReaction });
		}
	};
</script>

<div class="labels-container">
	{#each reactions as reaction, index (index)}
		{#if reaction.quantity > 0}
			<div
				class="label"
				on:click={() => {
					handleLabelClick(index);
				}}
			>
				<span>{reaction.reaction}</span>
				<span>{reaction.quantity}</span>
			</div>
		{/if}
	{/each}
</div>

<style>
	.labels-container {
		display: flex;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
	}

	.label {
		border: 1px #888888 solid;
		border-radius: 9999px;
		padding: 2px 5px 2px 5px;
		background-color: #faf9f9;
		color: #888888;
		cursor: pointer;
		user-select: none;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
		min-width: max-content;
		font-size: 0.75rem;
	}

	.label:hover {
		background-color: #f0f0f0;
	}
</style>
