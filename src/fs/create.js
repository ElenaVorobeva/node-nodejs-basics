import { writeFile, access, constants } from "node:fs";

const createFile = (file, body) => {
	writeFile(file, body, (error) => {
		if (error) {
			throw error;
		}
	});
};

const create = async () => {
	// Write your code here
	const file = "files/fresh.txt";
	const body = "I am fresh and young";

	// checks if the file exists
	access(file, constants.F_OK, (isNotCreated) => {
		// creates if it doesn't
		if (isNotCreated) {
			createFile(file, body);
		}

		// throws an error if it does
		if (!isNotCreated) {
			throw Error("FS operation failed");
		}
	});
};

await create();
