export const surround = (text: string, twoLetters: string) => {
	if (twoLetters.length !== 2) {
		return text;
	} else {
		const first = twoLetters[1];
		const last = twoLetters[1];
		return first + text + last;
	}
}