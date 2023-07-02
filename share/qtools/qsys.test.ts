import { getCurrentEnvironment, getCurrentPageIdCode, getCurrentUrl } from "./qsys";

describe('getCurrentPageIdCode()', () => {
	it("the function exists", () => {
		expect(getCurrentPageIdCode()).toBe('');
	});
});

describe('getCurrentEnvironment()', () => {
	it("the function exists", () => {
		expect(getCurrentEnvironment()).toBe('production');
	});
});

describe('getCurrentUrl()', () => {
	it("the function exists", () => {
		expect(getCurrentUrl()).toBe('');
	});
});