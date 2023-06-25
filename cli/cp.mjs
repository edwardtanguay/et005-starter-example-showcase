import fs from 'fs';

const createFile = (pathAndFileName, content) => {
	(async () => {
		fs.writeFile(pathAndFileName, content.trim(), () => {});
	})();
};

const name = process.argv[2];

if (name === undefined) {
	console.log('SCRIPT: cp');
	console.log('NAME: create example');
	console.log('-------------------------');
	console.log('EXAMPLE: npm run ce example_animated_dropdown');
	console.log('RESULT: creates the following pages');
	console.log('/scr/examples/example_animated_dropdown.ts');
	console.log('/scr/examples/example_animated_dropdown.scss');
	process.exit();
} else {

	// create code file
	createFile(`./src/examples/${name}.ts`,`
export const Page${name} = () => {
	return (
		<div className="page page${name}">
			<p>This is the ${name} page.</p>
		</div>
	);
};
	`);
}