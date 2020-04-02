const storageMock = () => {
	const storage = {};

	return {
		setItem: (key, value) => {
			storage[key] = value || '';
		},

		getItem: key => {
			return key in storage ? storage[key] : null;
		},

		removeItem: key => {
			delete storage[key];
		}
	};
};

window.localStorage = storageMock();
