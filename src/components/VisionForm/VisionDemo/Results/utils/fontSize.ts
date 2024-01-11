/**
 * Makes font smaller based on width of number
 * @param initialSize
 * @param v
 * @returns
 */
export const getFontSizeByNumberWidth = (
	initialSize: number,
	value: number[]
) => {
	const sizes = value.map((v) => {
		if (isNaN(v)) {
			return initialSize;
		}

		const val = v.toString().split(".")[0];
		const numWidth = val.length;
		const multiplier = numWidth - 3;

		if (multiplier <= 0) {
			return initialSize;
		}

		return initialSize - getFontMultiplier(multiplier) * multiplier;
	});

	return Math.min(...sizes);
};

/**
 * Given the magnitude of the number, get the font size multiplier
 * @param multiplier
 */
const getFontMultiplier = (multiplier: number) => {
	switch (multiplier) {
		case 1:
			return 6;
		case 2:
			return 5;
		case 3:
			return 4;
		default:
			return 3;
	}
};
