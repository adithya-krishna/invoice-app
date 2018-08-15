export const pluralize = (identifier = 'item', count = 0) => {
	switch (count) {
		case 0: {
			return `No ${identifier}s`;
		}
		case 1: {
			return `${identifier}`;
		}
		default:
			return `${identifier}s`;
	}
};
