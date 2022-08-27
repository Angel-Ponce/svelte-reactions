<script lang="ts">
	import { randomId } from '$lib/helpers/randomId';
	import { Trigger } from '$lib';
</script>

<div
	style="display: flex; flex-direction: column; gap: 25px; width: full; height: 100vh; justify-content: center; align-items: center;"
>
	<Trigger
		position="bottom-left"
		on:reaction={(e) => {
			// Do stuff
		}}
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
