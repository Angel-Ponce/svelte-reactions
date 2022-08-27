<script lang="ts">
	import type { ReactionType } from './types';
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
	{#each reactions as reaction, index}
		{#if reaction.quantity > 0}
			<div
				class="label"
				on:click={() => {
					handleLabelClick(index);
				}}
			>
				{#if typeof reaction.reaction == 'string'}
					<div>{reaction.reaction}</div>
				{:else}
					<div class="label-component">
						<svelte:component this={reaction.reaction} />
					</div>
				{/if}
				<div>{reaction.quantity}</div>
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
		display: flex;
		align-items: center;
		gap: 5px;
		border: 1px #888888 solid;
		border-radius: 9999px;
		padding: 2px 5px 2px 5px;
		background-color: #faf9f9;
		color: #888888;
		cursor: pointer;
		user-select: none;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
		font-size: 0.8rem;
		max-height: 25px;
		overflow: hidden;
	}

	.label .label-component {
		display: flex;
		justify-content: center;
		align-items: center;
		width: auto;
		height: auto;
		max-width: 25px;
		max-height: 25px;
		transform: scale(0.75);
	}

	.label:hover {
		background-color: #f0f0f0;
	}
</style>
