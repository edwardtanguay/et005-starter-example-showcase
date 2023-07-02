import { replaceAll } from "./qstr";

describe('test that replaceAll() is correctly implemented', () => {
	it("returns various brackets correctly", () => {
		expect(replaceAll('this-is-a-test', '-', '_')).toBe('this_is_a_test');
	});
});