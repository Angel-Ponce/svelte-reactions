<script context="module" lang="ts">
	import { onMount, type SvelteComponent } from 'svelte/internal';
	import { fly } from 'svelte/transition';
	import { onClickOutside } from './helpers/clickOutside';

	export interface ReactionType {
		reaction: string | typeof SvelteComponent;
		quantity: number;
		clicked: boolean;
	}
</script>

<script lang="ts">
	import Reaction from './Reaction.svelte';
	import TriggerIcon from './TriggerIcon.svelte';

	export let reactions: ReactionType[] = [
		{ reaction: '👍', quantity: 10, clicked: false },
		{ reaction: '😂', quantity: 0, clicked: false },
		{ reaction: '❤️', quantity: 0, clicked: false },
		{ reaction: '😮', quantity: 0, clicked: false },
		{ reaction: '😡', quantity: 0, clicked: false }
	];

	export let showLabels = true;

	let activeDropdown = false;
	let element: HTMLDivElement;

	const handleLabelClick = (reactionIndex: number) => {
		let clickedReaction = reactions[reactionIndex];

		if (clickedReaction) {
			clickedReaction.clicked = !clickedReaction.clicked;
			if (clickedReaction.clicked) {
				clickedReaction.quantity++;
			} else {
				clickedReaction.quantity--;
			}
		}

		reactions = reactions.map((reaction, index) => {
			if (index == reactionIndex) {
				return clickedReaction;
			}
			return reaction;
		});
	};

	onMount(() => {
		if (element) {
			element.addEventListener('clickOutside', () => {
				activeDropdown = false;
			});
		}
	});
</script>

<div class="trigger-container">
	<div
		class="trigger"
		on:click={() => (activeDropdown = !activeDropdown)}
		use:onClickOutside
		bind:this={element}
	>
		<TriggerIcon width={18} />
		{#if activeDropdown}
			<div
				class={`reactions-container`}
				transition:fly={{ y: 8, duration: 300 }}
				on:click={(e) => e.stopPropagation()}
			>
				{#each reactions as reaction, index (index)}
					<Reaction
						bind:quantity={reaction.quantity}
						bind:clicked={reaction.clicked}
						reaction={reaction.reaction}
						on:reactionClicked={() => {
							activeDropdown = false;
						}}
					/>
				{/each}
			</div>
		{/if}
	</div>
	{#if showLabels}
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
