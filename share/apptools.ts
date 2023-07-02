import * as qsys from './qtools/qsys.js';
import appconfig from './appconfig.json';

export const getAppTitle = () => {
	const baseTitle = appconfig.title;
	if (qsys.getCurrentEnvironment() === 'development') {
		return `${baseTitle} (dev mode)`;
	} else {
		return baseTitle;
	}
}