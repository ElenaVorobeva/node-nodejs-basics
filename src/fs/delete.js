import { access } from "node:fs";
import { constants, rm } from "node:fs";

const remove = async () => {
	// Write your code here
	const fileToRemove = "./files/fileToRemove.txt";
	const errorMessage = "FS operation failed";

	// check if file exists
	access(fileToRemove, constants.F_OK, (isNotCreated) => {
		// throws an error if it doesn't
		if (isNotCreated) {
			throw Error(errorMessage);
		}

		// deletes it if it does
		if (!isNotCreated) {
			rm(fileToRemove, (err) => {
				if (err) {
					throw Error(err);
				}
			});
		}
	});
};

await remove();
