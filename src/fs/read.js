import { access, constants, readFile } from "node:fs";

const read = async () => {
	// Write your code here
	const fileToRead = "./files/fileToRead.txt";
	const errorMessage = "FS operation failed";

	// checks if file exists
	access(fileToRead, constants.F_OK, (isNotCreated) => {
		// throws an error if it doesn't
		if (isNotCreated) {
			throw Error(errorMessage);
		}

		if (!isNotCreated) {
			readFile(fileToRead, "utf8", (err, data) => {
				if (err) {
					throw Error(err);
				}

				console.log(data);
			});
		}
	});
};

await read();
