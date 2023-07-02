import * as qsys from './qtools/qsys.js';

export const getAppTitle = () => {
	const baseTitle = 'HTML-CSS-JavaScript Showcase';
	if (qsys.getCurrentEnvironment() === 'development') {
		return `${baseTitle} (dev mode)`;
	} else {
		return baseTitle;
	}
}