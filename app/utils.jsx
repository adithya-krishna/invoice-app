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

export const formatMoney = (
	value,
	decimalPlaces = 2,
	decimalPoint = '.',
	separator = ','
) => {
	let negativeSign = value < 0 ? '-' : '';
	let valueString = String(
		parseInt((value = Math.abs(Number(value) || 0).toFixed(decimalPlaces)))
	);
	let j = (j = valueString.length) > 3 ? j % 3 : 0;
	return (
		negativeSign +
		(j ? valueString.substr(0, j) + decimalPoint : '') +
		valueString.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + decimalPoint) +
		(decimalPlaces
			? decimalPoint +
			  Math.abs(value - valueString)
					.toFixed(decimalPlaces)
					.slice(2)
			: '')
	);
};
