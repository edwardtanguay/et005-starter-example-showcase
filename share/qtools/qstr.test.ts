import { replaceAll } from "./qstr";

describe('test replaceAll()', () => {
	it("it can replace characters correctly", () => {
		expect(replaceAll('this-is-a-test', '-', '_')).toBe('this_is_a_test');
	});
	it("it can handle spaces on each side", () => {
		expect(replaceAll('   test', '-', '_')).toBe('   test');
		expect(replaceAll('test   ', '-', '_')).toBe('test   ');
		expect(replaceAll('   test   ', '-', '_')).toBe('   test   ');
	});
});