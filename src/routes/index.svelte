<script lang="ts">
	import Trigger from '$lib/Trigger.svelte';
</script>

<div style="">
	<Trigger
		on:reaction={(e) => {
			console.log(e);
		}}
	/>
</div>
