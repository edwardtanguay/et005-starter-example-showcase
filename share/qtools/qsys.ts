import * as qsys from './qsys';

export const getCurrentPageIdCode = () => {
	const url = qsys.getCurrentUrl();
	const parts = url.split('/');
	return parts[parts.length - 1];
}

export const getCurrentEnvironment = () => {
	const currentUrl = qsys.getCurrentUrl();
	if (currentUrl.includes('//localhost') || currentUrl.includes('//127.0.0.1')) {
		return 'development';
	} else {
		return 'production';
	}
}

export const getCurrentUrl = () => {
	return window.location.href;
}

export const createUrlCodeFromIdCode = (idCode: string) => {
	return idCode.replaceAll('_', '-');
}

export const NEW_LINE = (numberOfNewLines = 1) => {
	const endOfLine = '\n';
	return endOfLine.repeat(numberOfNewLines);
};


