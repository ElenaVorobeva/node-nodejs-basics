import { access, constants } from "node:fs";
import { cp } from "node:fs/promises";

const copy = async () => {
	// Write your code here
	const directory = "./files";
	const targetDirectory = "./files_copy";
	const errorMessage = "FS operation failed";

	// checks if directory exists
	access(directory, constants.F_OK, (isNotCreated) => {
		// throws an error if it doesn't
		if (isNotCreated) {
			throw Error(errorMessage);
		}
	});

	// checks if copied directory exists
	access(targetDirectory, constants.F_OK, (isNotCreated) => {
		// creates if it doesn't
		if (isNotCreated) {
			cp(directory, targetDirectory, { recursive: true });
		}

		// throws an error if it does
		if (!isNotCreated) {
			throw Error(errorMessage);
		}
	});
};

await copy();
