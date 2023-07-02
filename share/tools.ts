import fs from 'fs';
import * as tools from './tools.js';

/**
 * Randomizes the items of an array sent as the parameter.
 *
 * tools.shuffle(icons);
 *
 * (returns void, array is shuffled)
 */
export const shuffle = (items: any[]) => {
	for (let i = items.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = items[i];
		items[i] = items[j];
		items[j] = temp;
	}
}

export const createUrlCodeFromIdCode = (idCode: string) => {
	return idCode.replaceAll('_', '-');
}

export const getRandomNumberBetween = (min: number, max: number) => {
	return Math.floor(Math.random() * max) + min;
}

export const getCurrentUrl = () => {
	return window.location.href;
}

export const getCurrentPageIdCode = () => {
	const url = tools.getCurrentUrl();
	const parts = url.split('/');
	return parts[parts.length - 1];
}

export const getCurrentEnvironment = () => {
	const currentUrl = tools.getCurrentUrl();
	if (currentUrl.includes('//localhost') || currentUrl.includes('//127.0.0.1')) {
		return 'development';
	} else {
		return 'production';
	}
}

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
	let roughLines: string[] = [];

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
	const newLines: string[] = [];
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

export const NEW_LINE = (numberOfNewLines = 1) => {
	const endOfLine = '\n';
	return endOfLine.repeat(numberOfNewLines);
};

export const convertSnakeCaseToKebabCase = (text: string) => {
	return text.replaceAll('_', '-');
}

export const getAppTitle = () => {
	const baseTitle = 'HTML-CSS-JavaScript Showcase';
	if (tools.getCurrentEnvironment() === 'development') {
		return `${baseTitle} (dev mode)`;
	} else {
		return baseTitle;
	}
}