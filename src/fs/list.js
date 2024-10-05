import { access, constants } from "node:fs";
import { readdir } from "node:fs/promises";

const list = async () => {
	// Write your code here
	const folderToDisplay = "./files";
	const errorMessage = "FS operation failed";

	// checks if directory exists
	access(folderToDisplay, constants.F_OK, async (isNotCreated) => {
		// throws an error if it doesn't
		if (isNotCreated) {
			throw Error(errorMessage);
		}

		// lists content if it does
		if (!isNotCreated) {
			try {
				const filesToDisplay = await readdir(folderToDisplay);
				for (const file of filesToDisplay) {
					console.log(file);
				}
			} catch (err) {
				throw Error(err);
			}
		}
	});
};

await list();
