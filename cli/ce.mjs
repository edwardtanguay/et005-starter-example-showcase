import * as tools from './tools.mjs';

const idCode = process.argv[2];

if (idCode === undefined) {
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
	tools.createFile(`./src/examples/${idCode}.ts`,`
import './${idCode}.scss';
import { wrapAsExample } from '../components/wrapAsExample';

const description =  '';

export const ${idCode} = () => {
	let html = '';
	html += \`
		<div class="ball">example</div>	
	\`;
	return wrapAsExample('${idCode}', html, description);
}
	`);

	// create style file
	tools.createFile(`./src/examples/${idCode}.scss`,`
.${idCode} {
	.ball {
		width: 6rem;
		height: 6rem;
		background-color: #555;
		border-radius: 50%;
		display: grid;
		place-items: center;
		padding: 2rem;
		font-family: verdana;
		font-size: 1.2rem;
	}
}
	`);

	// register component in main.ts
;
	tools.addLineInFile(`./src/main.ts`, '@@FIRSTLINE', `import { ${idCode} } from './examples/${idCode}';`);
	// tools.addLineInFile(`./src/main.ts`, 'class="examples"', `\$\{${idCode}()\}`);
}