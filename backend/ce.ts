import * as qstr from '../share/qtools/qstr';
import * as qfil from '../share/qtools/qfil';

const idCodeSnakeCase = process.argv[2];

if (idCodeSnakeCase === undefined) {
	console.log('SCRIPT: ce');
	console.log('NAME: create example');
	console.log('-------------------------');
	console.log('EXAMPLE: npm run ce example_animated_dropdown');
	console.log('RESULT: creates the following pages');
	console.log('/scr/examples/example_animated_dropdown.ts');
	console.log('/scr/examples/example_animated_dropdown.scss');
	process.exit();
} else {
	const idCodeKebabCase = qstr.convertSnakeCaseToKebabCase(idCodeSnakeCase);

	// create code file
	qfil.createFile(`./src/examples/${idCodeSnakeCase}.ts`, `
import './${idCodeSnakeCase}.scss';
import { wrapAsExample } from '../components/wrapAsExample';

const description =  '';

export const ${idCodeSnakeCase} = () => {
	let html = '';
	html += \`
		<div class="ball">example</div>	
	\`;
	return wrapAsExample('${idCodeSnakeCase}', html, description);
}
	`);

	// create style file
	qfil.createFile(`./src/examples/${idCodeSnakeCase}.scss`, `
.${idCodeSnakeCase} {
	.ball {
		width: 9rem;
		height: 9rem;
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
	qfil.addLineInFile(`./src/main.ts`, '@@FIRSTLINE', `import { ${idCodeSnakeCase} } from './examples/${idCodeSnakeCase}';`);
	qfil.addLineInFile(`./src/main.ts`, 'class="examples"', `\$\{displayComponent(${idCodeSnakeCase}, '${idCodeKebabCase}')\}`);

	// ${displayComponent(example_test, 'example-test')}
}