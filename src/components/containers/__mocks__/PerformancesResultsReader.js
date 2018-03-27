const mock = jest.fn().mockImplementation(() => {
	return {
		read: () => {
			console.log('mocked');
		}
	};
});

export default mock;
