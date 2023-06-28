import * as config from '../config';

export const wrapAsExample = (idCode: string, html: string, description = '') => {
	const html_description = description.trim() === '' ? '' : `<div class="description">${description}</div>`;

	const codeUrl = `${config.githubRepositoryUrl}/blob/dev/src/examples/${idCode}.ts`;
	const stylesUrl = `${config.githubRepositoryUrl}/blob/dev/src/examples/${idCode}.scss`;

	return /* html */ `
	<fieldset class="example ${idCode}">
		<legend>${idCode}</legend>
		${html_description}
		<div class="links">
			<div><i class="fa fa-github" aria-hidden="true"></i> <a target="_blank" href=${codeUrl}>${idCode}.ts</a></div>
			<div><i class="fa fa-github" aria-hidden="true"></i> <a target="_blank" href=${stylesUrl}>${idCode}.scss</a></div>
			<div class="permalink"><i class="fa fa-link" aria-hidden="true"></i>
 <a href="nnn">${idCode}</a></div>
		</div>
		${html}	
	</fieldset>
	`;
};