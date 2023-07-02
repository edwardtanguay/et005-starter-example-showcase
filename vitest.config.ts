import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		include: ['./share/**/*.test.ts'],
		globals: true
	},
});