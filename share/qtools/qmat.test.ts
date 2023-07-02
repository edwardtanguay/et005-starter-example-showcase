import {getRandomNumberBetween} from "./qmat.js";

describe('getRandomNumberBetween()', () => {
	it("it returns a number within range", () => {
		expect(getRandomNumberBetween(1, 10)).toBeGreaterThanOrEqual(1);
		expect(getRandomNumberBetween(1, 10)).toBeLessThan(10);
	});
});