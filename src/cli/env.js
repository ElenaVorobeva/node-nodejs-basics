const parseEnv = () => {
	// Write your code here

	// get env
	const envObject = process.env;
	const envObjectEntries = Object.entries(envObject);

	const mappedEnvObjectEntries = envObjectEntries.map(([key, value]) => {
		console.log(`RSS_${key}=${value}`);
		return { [`${key}`]: value };
	});

	return mappedEnvObjectEntries;
};

parseEnv();
