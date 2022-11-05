<script lang="ts">
	import '$lib/global.css';
	import { Trigger } from '$lib';
</script>

<div
	style="display: flex; flex-direction: column; gap: 25px; width: full; height: 100vh; justify-content: center; align-items: center;"
>
	<Trigger
		position="bottom-left"
		reactions={[
			{
				id: '1',
				clicked: false,
				quantity: 10,
				reaction: '😘'
			},
			{
				id: '2',
				clicked: true,
				quantity: 12,
				reaction: '🔥'
			}
		]}
		on:reaction={(e) => {
			console.log(e.detail);
		}}
	/>
</div>
