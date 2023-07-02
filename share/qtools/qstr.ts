import * as qsys from './qsys.js';
import * as qstr from './qstr.js';

export const convertLinesToStringBlock = (lines: string[]) => {
	let r = '';
	let index = 0;
	for (const line of lines) {
		r += line;
		if (index != lines.length - 1) {
			r += qsys.NEW_LINE();
		}
		index++;
	}
	return r;
};

export const convertStringBlockToLines = (stringBlock: string, trimLines = true) => {
	let roughLines: string[] = [];

	if (qstr.isEmpty(stringBlock)) {
		return [];
	}
	roughLines = stringBlock.split('\n');
	if (trimLines) {
		roughLines = qstr.trimAllLinesInLinesArray(roughLines);
	}
	roughLines = qstr.trimLinesOfEndBlanks(roughLines);
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
	const newLines: string[] = [];
	lines.forEach(function (line) {
		let newLine = line.trim();
		newLines.push(newLine);
	});
	return newLines;
};

// returns a lines array that has front and end blank strings, as one without these blanks
export const trimLinesOfEndBlanks = (lines: string[]) => {
	lines = qstr.trimBeginningLinesOfBlanks(lines);
	lines = lines.reverse();
	lines = qstr.trimBeginningLinesOfBlanks(lines);
	lines = lines.reverse();
	return lines;
};

// if first line of lines array is blank, it will remove it
// but don't remove any blank lines from middle or end
export const trimBeginningLinesOfBlanks = (lines: string[]) => {
	const newLines: string[] = [];
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

export const convertSnakeCaseToKebabCase = (text: string) => {
	return qstr.replaceAll(text, '_', '-');
}

/**
 * REPLACE ALL OCCURANCES IN A STRING:
 *
 * qstr.replaceAll("This is a tost.", "o", "e");
 *
 * "This is a test."
 */
export const replaceAll = (text: string, search: string, replace: string) => {
	return text.split(search).join(replace);
};
