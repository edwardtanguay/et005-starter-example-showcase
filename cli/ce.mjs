import fs from 'fs';

const createFile = (pathAndFileName, content) => {
	(async () => {
		fs.writeFile(pathAndFileName, content.trim(), () => {});
	})();
};

const idCode = process.argv[2];

if (name === undefined) {
	console.log('SCRIPT: ce');
	console.log('NAME: create example');
	console.log('-------------------------');
	console.log('EXAMPLE: npm run ce example_animated_dropdown');
	console.log('RESULT: creates the following pages');
	console.log('/scr/examples/example_animated_dropdown.ts');
	console.log('/scr/examples/example_animated_dropdown.scss');
	process.exit();
} else {

	// create code file
	createFile(`./src/examples/${idCode}.ts`,`
import './${idCode}.scss';
import { wrapAsExample } from '../components/wrapAsExample';

const description =  '';

export const ${idCode} = () => {
	let html = '';
	html += \`
		<div class="ball">the ball</div>	
	\`;
	return wrapAsExample('${idCode}', html, description);
}
	`);
}