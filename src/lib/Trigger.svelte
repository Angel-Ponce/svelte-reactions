<script lang="ts">
	import Reaction from './Reaction.svelte';
	import TriggerIcon from './TriggerIcon.svelte';
</script>

<div class="trigger" tabindex="0">
	<TriggerIcon width={18} />
</div>

<style>
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
</style>
