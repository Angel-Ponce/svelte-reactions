<script lang="ts">
	import { randomId } from '$lib/helpers/randomId';

	import Trigger from '$lib/Trigger.svelte';
</script>

<div
	style="display: flex; flex-direction: column; gap: 25px; width: full; height: 100vh; justify-content: center; align-items: center;"
>
	<Trigger
		position="bottom-left"
		on:reaction={(e) => {
			// Do stuff
		}}
		reactions={[
			{ id: randomId(), reaction: '👍', quantity: 127, clicked: false },
			{ id: randomId(), reaction: '😂', quantity: 155, clicked: false },
			{ id: randomId(), reaction: '❤️', quantity: 138, clicked: false },
			{ id: randomId(), reaction: '😮', quantity: 12, clicked: false },
			{ id: randomId(), reaction: '😡', quantity: 12, clicked: false }
		]}
	/>
	<Trigger
		position="bottom-left"
		on:reaction={(e) => {
			// Do stuff
		}}
	>
		<button>Im a custom trigger</button>
	</Trigger>
</div>
