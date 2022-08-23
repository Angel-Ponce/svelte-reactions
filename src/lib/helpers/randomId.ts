const randomId = () => {
	const set = 'AaBbCcDdEeFfGgHhIiJjKkLlMmOoPpQqRrSsTtUuVvWwXxYyZz1234567890!·$%&/()=?¿{}[]*+';
	let id = '';
	for (let i = 0; i < 25; i++) {
		const randomPercentage = Math.floor(Math.random() * 100) / 100;
		id += set.charAt(Math.floor(randomPercentage * set.length));
	}

	return id;
};

export { randomId };
