<script lang="ts">
	export let reaction = '🚀';
	export let quantity = 0;
</script>

<div class="reaction">
	<span class="emoji">
		{reaction}
		{#if quantity > 0}
			{quantity}
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

	.reaction .emoji:active {
		transform: scale(0.85);
		transition-duration: inherit;
	}
</style>
