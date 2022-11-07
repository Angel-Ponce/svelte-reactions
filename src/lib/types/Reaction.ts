import type { SvelteComponent } from 'svelte';

export interface ReactionType {
	id: string;
	reaction: string | typeof SvelteComponent;
	labelReaction?: string | typeof SvelteComponent;
	quantity: number;
	clicked: boolean;
	[key: string]: unknown;
}
