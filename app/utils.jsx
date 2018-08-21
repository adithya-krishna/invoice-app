import reduce from 'lodash/reduce';

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

//ref: https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript
export const generateRandomId = () =>
	Math.random()
		.toString(36)
		.slice(-8)
		.toUpperCase();

export const randomIntFromInterval = (min, max) =>
	Math.floor(Math.random() * (max - min + 1) + min);

export const handleTotalCalculation = (items, tax, discount) => {
	let taxMultiplier = toNumber(tax) / 100;
	let discountMultiplier = toNumber(discount) / 100;
	if (taxMultiplier > 1) {
		taxMultiplier = 0;
	}
	if (discountMultiplier > 1) {
		discountMultiplier = 0;
	}

	let subTotal = reduce(
		items,
		(result, item) =>
			result + toNumber(item.quantity) * toNumber(item.value),
		0
	);
	const taxAmount = taxMultiplier > 0 ? taxMultiplier * subTotal : 0;
	const discountAmount =
		discountMultiplier > 0 ? discountMultiplier * subTotal : 0;
	const grandTotal = subTotal + taxAmount - discountAmount;

	return {
		grandTotal: formatMoney(grandTotal),
		subTotal: formatMoney(subTotal),
		taxAmount: formatMoney(taxAmount),
		discountAmount: formatMoney(discountAmount)
	};
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
		(j ? valueString.substr(0, j) + separator : '') +
		valueString.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + separator) +
		(decimalPlaces
			? decimalPoint +
			  Math.abs(value - valueString)
					.toFixed(decimalPlaces)
					.slice(2)
			: '')
	);
};

// there are at least 5 ways to convert string to number.
// the methods below are chosen becuase of performance and most edge cases handled.
// ref: https://coderwall.com/p/5tlhmw/converting-strings-to-number-in-javascript-pitfalls
// parseFloat is chosen because it, along with isNaN and isFinite
// handle the most edge cases when tested with typical
// javascript datatypes and values.
export const toNumber = value => {
	const number = parseFloat(value);
	if (!isNaN(number) && isFinite(value)) {
		return number;
	} else {
		return 0;
	}
};

export const isNumeric = value => {
	return !isNaN(parseFloat(value)) && isFinite(value);
};
