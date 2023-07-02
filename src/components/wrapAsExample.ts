import * as config from '../config';
import * as qsys from '../../share/qtools/qsys';
import * as qstr from '../../share/qtools/qstr';

export const wrapAsExample = (idCode: string, html: string, description = '') => {
	const html_description = description.trim() === '' ? '' : `<div class="description">${description}</div>`;
	const codeUrl = `${config.githubRepositoryUrl}/blob/dev/src/examples/${idCode}.ts`;
	const stylesUrl = `${config.githubRepositoryUrl}/blob/dev/src/examples/${idCode}.scss`;
	const permalink = qstr.convertSnakeCaseToKebabCase(idCode);
	const currentPageIdCode = qsys.getCurrentPageIdCode();


	return /* html */ `
	<fieldset class="example ${idCode}">
		<legend class="${currentPageIdCode !== '' ? 'singleExample' : ''}">${idCode}</legend>
		${html_description}
		<div class="links">
			<div><i class="fa fa-github" aria-hidden="true"></i> <a target="_blank" href=${codeUrl}>${idCode}.ts</a></div>
			<div><i class="fa fa-github" aria-hidden="true"></i> <a target="_blank" href=${stylesUrl}>${idCode}.scss</a></div>
			<div class="permalink"><i class="fa fa-link" aria-hidden="true"></i> <a href="${permalink}">permalink</a></div>
		</div>
		${html}	
	</fieldset>
	`;
};