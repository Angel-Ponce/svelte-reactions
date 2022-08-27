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
		reaction = { ...reaction, clicked: !reaction.clicked };
		if (reaction.clicked) {
			reaction = { ...reaction, quantity: reaction.quantity + 1 };
		} else {
			reaction = { ...reaction, quantity: reaction.quantity - 1 };
		}

		dispatch('reactionClicked', { reaction });
	};
</script>

<div
	class="reaction"
	style={`--bg-color: ${reaction.clicked ? '#f0f0f0' : '#ffffff'}; --delay: ${
		(position + 1) * 100
	}ms;`}
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
		background-color: #f0f0f0;
	}

	.reaction .emoji {
		font-size: 1.2rem;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
		color: #888888;
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
