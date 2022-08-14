import type { SvelteComponent } from 'svelte';

export interface ReactionType {
	reaction: string | typeof SvelteComponent;
	quantity: number;
	clicked: boolean;
}
