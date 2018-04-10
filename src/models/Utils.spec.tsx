import Utils from './Utils';

describe('Utils', () => {
	it('should be defined', () => {
		expect(Utils).toBeDefined();
	});

	it('should define the public methods', () => {
		expect(typeof Utils.convertDurationFromMilliSecToSec).toEqual('function');
	});

	describe('convertDurationFromMilliSecToSec', () => {
		it('should return a number', () => {
			expect(typeof Utils.convertDurationFromMilliSecToSec(1)).toEqual('number');
		});

		it('should convert ms to s', () => {
			expect(Utils.convertDurationFromMilliSecToSec(1)).toEqual(0.001);
		});

		it('should fix the number to 3 decimal digits', () => {
			expect(Utils.convertDurationFromMilliSecToSec(0.155)).toEqual(0);
		});
	});
});
