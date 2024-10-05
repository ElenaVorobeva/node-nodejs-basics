import { access, constants, rename as renameFS } from "node:fs";

const rename = async () => {
	// Write your code here
	const wrongFileName = "./files/wrongFilename.txt";
	const rightFileName = "./files/properFilename.md";
	const errorMessage = "FS operation failed";

	// checks if right file exists
	access(rightFileName, constants.F_OK, (isNotCreated) => {
		// throws an error if it does
		if (!isNotCreated) {
			throw Error(errorMessage);
		}
	});

	access(wrongFileName, constants.F_OK, (isNotCreated) => {
		// throws an error if it doesn't
		if (isNotCreated) {
			throw Error(errorMessage);
		}

		// renames if it does
		if (!isNotCreated) {
			renameFS(wrongFileName, rightFileName, (isNotCreated) => {
				if (isNotCreated) {
					throw Error(err);
				}
			});
		}
	});
};

await rename();
