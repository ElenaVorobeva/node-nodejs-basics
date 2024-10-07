const parseArgs = () => {
	// Write your code here

	// gets the array without uncessary args
	const [pathToNode, pathToArgs, ...args] = process.argv;

	// creates a nested array with pairred key/value
	const values = args.reduce((result, current, index) => {
		if (index % 2 === 0) {
			return [...result, current];
		}

		const lastValue = result.at(-1).replace(0, 1, '');
		result.pop();

		return [...result, [lastValue, current]];
	}, [])

	// displays the values
	values.forEach(([key, value]) => {
		console.log(`${key} is ${value}`)
	})
};

parseArgs();
