<script lang="ts">
	import Trigger from '$lib/Trigger.svelte';
</script>

<div
	style="display: flex; width: full; height: 100vh; justify-content: center; align-items: center;"
>
	<Trigger
		position="bottom-left"
		on:reaction={(e) => {
			// Do stuff
		}}
	/>
</div>
