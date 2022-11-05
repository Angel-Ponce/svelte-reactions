<script lang="ts">
	import { createEventDispatcher } from 'svelte/internal';
	import { randomId } from './helpers/randomId';
	import type { ReactionType } from './types';

	const dispatch = createEventDispatcher();

	export let reaction: ReactionType = {
		id: randomId(),
		reaction: '✌️',
		quantity: 0,
		clicked: false
	};

	//Define the position in the array of reactions
	export let position: number;

	let focus: boolean = false;

	const toggleClick = (click: boolean) => {
		focus = click;
	};

	export const handleClick = () => {
		let newReaction = { ...reaction, clicked: !reaction.clicked };

		if (newReaction.clicked) {
			newReaction = { ...newReaction, quantity: reaction.quantity + 1 };
		} else {
			newReaction = { ...newReaction, quantity: reaction.quantity - 1 };
		}
		reaction = newReaction;

		dispatch('reactionClicked', { reaction: newReaction });
	};
</script>

<div
	class="reaction"
	style={`--bg-color: ${
		reaction.clicked ? 'var(--srReactionClickedBg)' : 'var(--srReactionNotClickedBg)'
	}; --delay: ${(position + 1) * 100}ms;`}
	on:mousedown={() => {
		toggleClick(true);
	}}
	on:mouseup={() => {
		toggleClick(false);
	}}
	on:click={handleClick}
	tabindex="0"
>
	<span class={`emoji ${focus && 'focus'}`}>
		{#if typeof reaction.reaction == 'string'}
			{reaction.reaction}
		{:else}
			<svelte:component this={reaction.reaction} />
		{/if}
	</span>
</div>

<style>
	.reaction {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2px;
		width: fit-content;
		border-radius: 4px;
		background-color: var(--bg-color);
		cursor: pointer;
		transition-duration: 500ms;
		user-select: none;
		padding: 5px;
		animation-name: appear;
		animation-duration: var(--delay);
	}

	.reaction:hover {
		background-color: var(--srReactionHoverBg);
	}

	.reaction .emoji {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2rem;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
		color: var(--srEmojiColor);
		max-width: 35px;
		max-height: 35px;
		overflow: hidden;
		aspect-ratio: 1 / 1;
	}

	.reaction .emoji.focus {
		transform: scale(0.85);
		transition: 200ms;
	}

	@keyframes appear {
		from {
			transform: translateY(15px);
			opacity: 60%;
		}
		to {
			transform: translateY(0px);
			opacity: 100%;
		}
	}
</style>
