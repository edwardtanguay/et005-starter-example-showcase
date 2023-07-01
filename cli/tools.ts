import fs from 'fs';
import * as tools from './tools.js';

export const createFile = (pathAndFileName: string, content: string) => {
	fs.writeFileSync(pathAndFileName, content.trim());
};

export const addLineInFile = (pathAndFileName: string, marker: string, additionalLine: string) => {
	const content = fs.readFileSync(pathAndFileName, { encoding: 'utf8' });
	const lines: string[] = tools.convertStringBlockToLines(content);
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
	const newContent = convertLinesToStringBlock(newLines);
	tools.createFile(pathAndFileName, newContent);
};

export const convertLinesToStringBlock = (lines: string[]) => {
	let r = '';
	let index = 0;
	for (const line of lines) {
		r += line;
		if (index != lines.length - 1) {
			r += tools.NEW_LINE();
		}
		index++;
	}
	return r;
};

export const convertStringBlockToLines = (stringBlock: string, trimLines = true) => {
	let roughLines:string[] = [];

	if (tools.isEmpty(stringBlock)) {
		return [];
	}
	roughLines = stringBlock.split('\n');
	if (trimLines) {
		roughLines = tools.trimAllLinesInLinesArray(roughLines);
	}
	roughLines = tools.trimLinesOfEndBlanks(roughLines);
	return roughLines;
};

export const isEmpty = (line: string) => {
	if (line == undefined || line == null) {
		return true;
	} else {
		line = line.toString();
		if (line.trim() == '') {
			return true;
		} else {
			return false;
		}
	}

};

export const trimAllLinesInLinesArray = (lines: string[]) => {
	const newLines:string[] = [];
	lines.forEach(function (line) {
		let newLine = line.trim();
		newLines.push(newLine);
	});
	return newLines;
};

// returns a lines array that has front and end blank strings, as one without these blanks
export const trimLinesOfEndBlanks = (lines: string[]) => {
	lines = tools.trimBeginningLinesOfBlanks(lines);
	lines = lines.reverse();
	lines = tools.trimBeginningLinesOfBlanks(lines);
	lines = lines.reverse();
	return lines;
};

// if first line of lines array is blank, it will remove it
// but don't remove any blank lines from middle or end
export const trimBeginningLinesOfBlanks = (lines: string[]) => {
	const newLines:string[] = [];
	let trimmingBlanks = true;
	lines.forEach(function (line) {
		let newLine = line;
		if (trimmingBlanks && line == "") {
			//skip it since it is a preceding blank item
		} else {
			newLines.push(newLine);
			trimmingBlanks = false;
		}
	});
	return newLines;
};

export const NEW_LINE = (numberOfNewLines = 1) => {
	const endOfLine = '\n';
	return endOfLine.repeat(numberOfNewLines);
};

export const convertSnakeCaseToKebabCase = (text:string) => {
	console.log('text', text);
	return text.replaceAll('_', '-');
}