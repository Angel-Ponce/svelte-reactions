<script lang="ts">
	import { randomId } from '$lib/helpers/randomId';
	import { Trigger, Angry, Confuse, Laugh, Lol, Scare } from '$lib';
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
		reactions={[
			{ id: randomId(), reaction: Angry, quantity: 127, clicked: false },
			{ id: randomId(), reaction: Confuse, quantity: 155, clicked: false },
			{ id: randomId(), reaction: Laugh, quantity: 138, clicked: false },
			{ id: randomId(), reaction: Lol, quantity: 12, clicked: false },
			{ id: randomId(), reaction: Scare, quantity: 12, clicked: false }
		]}
	>
		<button>Im a custom trigger</button>
	</Trigger>
</div>
