import fs from 'fs';

export const createFile = (pathAndFileName, content) => {
	(async () => {
		fs.writeFile(pathAndFileName, content.trim(), () => {});
	})();
};
