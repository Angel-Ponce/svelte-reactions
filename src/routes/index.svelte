<script lang="ts">
	import { randomId } from '$lib/helpers/randomId';
	import { Trigger, Like, Haha, Heart, Wow, Angry } from '$lib';
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
			{ id: randomId(), reaction: Like, quantity: 127, clicked: false },
			{ id: randomId(), reaction: Haha, quantity: 155, clicked: false },
			{ id: randomId(), reaction: Heart, quantity: 138, clicked: false },
			{ id: randomId(), reaction: Wow, quantity: 12, clicked: false },
			{ id: randomId(), reaction: Angry, quantity: 12, clicked: false }
		]}
	>
		<button>Im a custom trigger</button>
	</Trigger>
</div>
