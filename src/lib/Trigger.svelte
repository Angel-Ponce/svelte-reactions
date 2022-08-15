<script lang="ts">
	import { onMount } from 'svelte/internal';
	import { fly } from 'svelte/transition';
	import Reaction from './Reaction.svelte';
	import TriggerIcon from './TriggerIcon.svelte';
	import Labels from './Labels.svelte';
	import { onClickOutside } from './helpers/clickOutside';
	import { createEventDispatcher } from 'svelte/internal';
	import type { Placement, ReactionType } from './types';
	import { placement } from './helpers/placement';

	export let reactions: ReactionType[] = [
		{ reaction: '👍', quantity: 0, clicked: false },
		{ reaction: '😂', quantity: 0, clicked: false },
		{ reaction: '❤️', quantity: 0, clicked: false },
		{ reaction: '😮', quantity: 0, clicked: false },
		{ reaction: '😡', quantity: 0, clicked: false }
	];

	export let showLabels = true;

	export let position: Placement = 'bottom-left';

	let showDropdown = false;
	let element: HTMLDivElement;
	const dispatch = createEventDispatcher();
	$: insetsPosition = placement(position);

	const handleReaction = (reaction: ReactionType) => {
		showDropdown = false;
		dispatch('reaction', { reaction });
	};

	onMount(() => {
		if (element) {
			element.addEventListener('clickOutside', () => {
				showDropdown = false;
			});
		}
	});
</script>

<div class="trigger-container">
	<div
		class="trigger"
		on:click={() => (showDropdown = !showDropdown)}
		use:onClickOutside
		bind:this={element}
	>
		<TriggerIcon width={18} />
		{#if showDropdown}
			<div
				class={`reactions-container`}
				transition:fly={{ y: 8, duration: 300 }}
				on:click={(e) => e.stopPropagation()}
				style={`--top: ${insetsPosition.top}; --right: ${insetsPosition.right}; --bottom: ${insetsPosition.bottom}; --left: ${insetsPosition.left};`}
			>
				{#each reactions as reaction, index (index)}
					<Reaction
						bind:reaction
						position={index}
						on:reactionClicked={() => {
							handleReaction(reaction);
						}}
					/>
				{/each}
			</div>
		{/if}
	</div>

	{#if showLabels}
		<Labels
			bind:reactions
			on:labelClicked={(e) => {
				dispatch('reaction', { ...e.detail });
			}}
		/>
	{/if}
</div>

<style>
	.trigger-container {
		position: relative;
		display: flex;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
	}

	.trigger {
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
		display: flex;
		top: var(--top);
		right: var(--right);
		bottom: var(--bottom);
		left: var(--left);
		align-items: center;
		gap: 3px;
		margin: 5px 0px 5px 0px;
		padding: 5px;
		border-radius: 6px;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		max-width: 320px;
		overflow-x: auto;
		cursor: default;
		overflow-y: hidden;
		background-color: white;
		z-index: 9999;
	}
</style>
