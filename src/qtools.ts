export const padZeros = (num: number, numZeros: number) => {
	const n = Math.abs(num);
	const zeros = Math.max(0, numZeros - Math.floor(n).toString().length);
	// eslint-disable-next-line no-restricted-properties
	const zeroString = Math.pow(10, zeros).toString().substr(1);
	return zeroString + n;
};