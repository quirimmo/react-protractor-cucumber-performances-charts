import totalDuration from './total-duration.reducer';

const NOT_EXISTENT_ACTION = {
	type: 'NOT_EXISTENT',
	duration: 100
};
const FETCH_TOTAL_DURATION_ACTION = {
	type: 'FETCH_TOTAL_DURATION',
	duration: 20
};

describe('totalDuration', () => {
	it('should be defined', () => {
		expect(totalDuration).toBeDefined();
		expect(typeof totalDuration).toEqual('function');
	});

	it('should return the initial state', () => {
		expect(totalDuration(1, NOT_EXISTENT_ACTION)).toEqual(1);
	});

	it('should return the duration', () => {
		expect(totalDuration(1, FETCH_TOTAL_DURATION_ACTION)).toEqual(20);
	});
});
