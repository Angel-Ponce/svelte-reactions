import type { Placement } from './../types/Placement';
const placement = (position: Placement) => {
	if (position == 'bottom-left') {
		return {
			top: '100% ',
			right: 'none',
			bottom: 'none',
			left: '0% '
		};
	}

	if (position == 'bottom-right') {
		return {
			top: '100% ',
			right: '0% ',
			bottom: 'none',
			left: 'none'
		};
	}

	if (position == 'top-left') {
		return {
			top: 'none',
			right: 'none',
			bottom: '100% ',
			left: '0% '
		};
	}

	if (position == 'top-right') {
		return {
			top: 'none',
			right: '0% ',
			bottom: '100% ',
			left: 'none'
		};
	}

	return {
		top: '100% ',
		right: 'none',
		bottom: 'none',
		left: '0% '
	};
};

export { placement };
