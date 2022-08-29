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
	import { randomId } from './helpers/randomId';

	export let reactions: ReactionType[] = [
		{ id: randomId(), reaction: '👍', quantity: 0, clicked: false },
		{ id: randomId(), reaction: '😂', quantity: 0, clicked: false },
		{ id: randomId(), reaction: '❤️', quantity: 0, clicked: false },
		{ id: randomId(), reaction: '😮', quantity: 0, clicked: false },
		{ id: randomId(), reaction: '😡', quantity: 0, clicked: false }
	];

	$: sortedReactions = [...reactions].sort((a, b) => b.quantity - a.quantity);

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
		class={`${!$$slots.default && 'trigger'}`}
		on:click={() => (showDropdown = !showDropdown)}
		use:onClickOutside
		bind:this={element}
	>
		{#if $$slots.default}
			<slot />
		{:else}
			<TriggerIcon width={18} />
		{/if}
		{#if showDropdown}
			<div
				class={`reactions-container`}
				transition:fly={{ y: 8, duration: 300 }}
				on:click={(e) => e.stopPropagation()}
				style={`--top: ${insetsPosition.top}; --right: ${insetsPosition.right}; --bottom: ${insetsPosition.bottom}; --left: ${insetsPosition.left};`}
			>
				{#each reactions as reaction, index}
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
			bind:reactions={sortedReactions}
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
		background-color: var(--srTriggerBg);
		padding: 5px;
		cursor: pointer;
		color: var(--srTriggerColor);
		transition-duration: 200ms;
	}

	.trigger:hover {
		background-color: var(--srTriggerHoverBg);
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
		margin: 5px 0px 0px 0px;
		padding: 5px;
		border-radius: 6px;
		box-shadow: var(--srTriggerContainerBoxShadow);
		max-width: 320px;
		overflow-x: auto;
		cursor: default;
		overflow-y: hidden;
		background-color: var(--srTriggerContainerBg);
		z-index: 9999;
	}
</style>
