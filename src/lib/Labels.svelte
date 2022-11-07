<script lang="ts">
	import type { ReactionType } from './types';
	import { createEventDispatcher } from 'svelte/internal';

	export let reactions: ReactionType[];

	$: sortedReactions = [...reactions].sort((a, b) => b.quantity - a.quantity);

	const dispatch = createEventDispatcher();

	const handleLabelClick = (reactionId: string) => {
		let clickedReaction = reactions.find((r) => r.id == reactionId);

		if (clickedReaction) {
			clickedReaction.clicked = !clickedReaction.clicked;
			if (clickedReaction.clicked) {
				clickedReaction.quantity++;
			} else {
				clickedReaction.quantity--;
			}

			reactions = reactions.map((reaction) => {
				if (reaction.id == reactionId && clickedReaction) {
					return clickedReaction;
				}
				return reaction;
			});

			dispatch('labelClicked', { reaction: clickedReaction });
		}
	};
</script>

<div class="labels-container">
	{#each sortedReactions as reaction, index}
		{#if reaction.quantity > 0}
			<div
				class="label"
				style={`--border-color: ${
					reaction.clicked ? 'var(--srLabelClickedBorderColor)' : 'var(--srLabelBorderColor)'
				}; --bg-color: ${
					reaction.clicked ? 'var(--srLabelClickedBg)' : 'var(--srLabelBg)'
				}; --color: ${
					reaction.clicked ? 'var(--srLabelClickedColor)' : 'var(--srLabelColor)'
				};  --hover-color: ${
					reaction.clicked ? 'var(--srLabelClickedHoverBg)' : 'var(--srLabelHoverBg)'
				};`}
				on:click={() => {
					handleLabelClick(reaction.id);
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
		border: 1px var(--border-color) solid;
		border-radius: 9999px;
		padding: 2px 5px 2px 5px;
		background-color: var(--bg-color);
		color: var(--color);
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
		background-color: var(--hover-color);
	}
</style>
