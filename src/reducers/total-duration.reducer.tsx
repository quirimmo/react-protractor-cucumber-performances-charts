const totalDuration = (state: number = 0, action: any): number => {
	switch (action.type) {
		case 'FETCH_TOTAL_DURATION':
			return action.duration;
		default:
			return state;
	}
};

export default totalDuration;
