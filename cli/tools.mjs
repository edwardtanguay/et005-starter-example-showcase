import fs from 'fs';
import * as tools from './tools.mjs';

export const createFile = (pathAndFileName, content) => {
	fs.writeFileSync(pathAndFileName, content.trim());
};

export const addLineInFile = (pathAndFileName, marker, additionalLine) => {
	const content = fs.readFileSync(pathAndFileName, {encoding: 'utf8'});
	const lines = tools.convertStringBlockToLines(content);
	let newLines = [];
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

export const convertLinesToStringBlock = (lines) => {
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

export const convertStringBlockToLines = (stringBlock, trimLines = true) => {
	let roughLines = [];

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

export const isEmpty = (line) => {
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

export const trimAllLinesInLinesArray = (lines) => {
	const newLines = [];
	lines.forEach(function (line, index) {
		let newLine = line.trim();
		newLines.push(newLine);
	});
	return newLines;
};

// returns a lines array that has front and end blank strings, as one without these blanks
export const trimLinesOfEndBlanks = (lines) => {
	lines = tools.trimBeginningLinesOfBlanks(lines);
	lines = lines.reverse();
	lines = tools.trimBeginningLinesOfBlanks(lines);
	lines = lines.reverse();
	return lines;
};

// if first line of lines array is blank, it will remove it
// but don't remove any blank lines from middle or end
export const trimBeginningLinesOfBlanks = (lines) => {
	const newLines = [];
	let trimmingBlanks = true;
	lines.forEach(function (line, index) {
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
