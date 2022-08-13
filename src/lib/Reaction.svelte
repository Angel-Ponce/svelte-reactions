<script lang="ts">
	import type { SvelteComponent } from 'svelte/internal';
	import { createEventDispatcher } from 'svelte/internal';

	const dispatch = createEventDispatcher();

	export let reaction: string | typeof SvelteComponent = '🚀';
	export let quantity = 0;

	let active: boolean = false;

	const toggleClick = (click: boolean) => {
		active = click;
	};
</script>

<div
	class="reaction"
	on:mousedown={() => {
		toggleClick(true);
	}}
	on:mouseup={() => {
		toggleClick(false);
	}}
	on:click={() => {
		quantity++;
		dispatch('reactionClicked', { reaction, quantity });
	}}
	tabindex="0"
>
	<span class={`emoji ${active && 'active'}`}>
		{reaction}
	</span>
</div>

<style>
	.reaction {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2px;
		width: fit-content;
		height: auto;
		border-radius: 4px;
		background-color: #ffffff;
		cursor: pointer;
		transition-duration: 500ms;
		user-select: none;
		padding: 3px;
	}

	.reaction:hover {
		background-color: #f0f0f0;
	}

	.reaction .emoji {
		font-size: 1rem;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
		color: #888888;
	}

	.reaction .emoji.active {
		transform: scale(0.85);
	}
</style>
