import fs from 'fs';
import * as qstr from './qstr.js';
import * as qfil from './qfil.js';

export const createFile = (pathAndFileName: string, content: string) => {
	fs.writeFileSync(pathAndFileName, content.trim());
};

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