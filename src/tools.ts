/**
 * Randomizes the items of an array sent as the parameter.
 *
 * tools.shuffle(icons);
 *
 * (returns void, array is shuffled)
 */
export const shuffle = (items: any[]) => {
	for (let i = items.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = items[i];
		items[i] = items[j];
		items[j] = temp;
	}
}

export const createUrlCodeFromIdCode = (idCode: string) => {
	return idCode.replaceAll('_', '-');
}

export const getRandomNumberBetween = (min: number, max: number) => {
	return Math.floor(Math.random() * max) + min;
}

import * as tools from './tools';

export const getCurrentUrl = () => {
	return window.location.href;
}

export const getCurrentPageIdCode = () => {
	const url = tools.getCurrentUrl();
	const parts = url.split('/');
	return parts[parts.length - 1];
}

export const getCurrentEnvironment = () => {
	const currentUrl = tools.getCurrentUrl();
	if (currentUrl.includes('//localhost') || currentUrl.includes('//127.0.0.1')) {
		return 'development';
	} else {
		return 'production';
	}
}