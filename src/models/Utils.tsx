class Utils {
	public static convertDurationFromMilliSecToSec(msDuration: number): number {
		return +(msDuration / 1000).toFixed(3);
	}
}

export default Utils;
