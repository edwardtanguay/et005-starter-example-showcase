import { replaceAll, isEmpty, convertLinesToStringBlock } from "./qstr";

describe('replaceAll()', () => {
	it("it can replace characters correctly", () => {
		expect(replaceAll('this-is-a-test', '-', '_')).toBe('this_is_a_test');
	});
	it("it can handle spaces on each side", () => {
		expect(replaceAll('   test', '-', '_')).toBe('   test');
		expect(replaceAll('test   ', '-', '_')).toBe('test   ');
		expect(replaceAll('   test   ', '-', '_')).toBe('   test   ');
	});
});

describe('isEmpty()', () => {
	it("it identifies a string of spaces as empty", () => {
		expect(isEmpty('    ')).toBe(true);
	});
	it("it identifies text as not empty", () => {
		expect(isEmpty('this is a test')).toBe(false);
	});
});

describe('convertLinesToStringBlock()', () => {
	it("it identifies text as not empty", () => {
		const lines = ['line1', 'line2', 'line3'];
		expect(convertLinesToStringBlock(lines)).toBe('line1\nline2\nline3');
	});
});