import fs from 'fs';
import * as qstr from './qstr';
import * as qfil from './qfil';

/**
 * Creates a file with content
 * 
 * qfil.createFile('../logs/log.txt', 'added item');
 * 
 * (file is created)
 */
export const createFile = (pathAndFileName: string, content: string) => {
	fs.writeFileSync(pathAndFileName, content.trim());
};

/**
 * Adds a line to a specific point in a file
 * 
 * qfil.addLineInFile(`./src/main.ts`, '@@FIRSTLINE', `import { ${idCodeSnakeCase} } from './examples/${idCodeSnakeCase}';`);
 * 
 * (line is added)
 */
export const addLineInFile = (pathAndFileName: string, marker: string, additionalLine: string) => {
	const content = fs.readFileSync(pathAndFileName, { encoding: 'utf8' });
	const lines: string[] = qstr.convertStringBlockToLines(content);
	let newLines: string[] = [];
	let lineNumber = 1;
	for (const line of lines) {
		if (lineNumber === 1 && marker === '@@FIRSTLINE') {
			newLines.push(additionalLine);
		}
		const newLine = line;
		newLines.push(newLine);
		if (newLine.includes(marker)) {
			newLines.push(additionalLine);
		}
		lineNumber++;
	}
	const newContent = qstr.convertLinesToStringBlock(newLines);
	qfil.createFile(pathAndFileName, newContent);
};