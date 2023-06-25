export const wrapAsExample = (idCode: string, html: string, description = '') => {
	const html_description = description.trim() === '' ? '' : `<div class="description">${description}</div>`;

	return /* html */ `
	<fieldset class="example ${idCode}">
		<legend>${idCode}</legend>
		${html_description}
		<div class="links">
			<div>code: <a href="nnn">${idCode}.ts</a></div>
			<div>styles: <a href="nnn">${idCode}.scss</a></div>
		</div>
		${html}	
	</fieldset>
	`;
};