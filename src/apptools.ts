export const surround = (text: string, twoLetters: string) => {
	if (twoLetters.length !== 2) {
		return text;
	} else {
		const first = twoLetters[0];
		const last = twoLetters[1];
		return first + text + last;
	}
}

export const chopLeft = (text: string, textToChop: string) => {
	return 'nnn';
}

export const chopRight = (text: string, textToChop: string) => {
	return 'nnn';
}

