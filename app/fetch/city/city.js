import {
	get
} from '../get';

export function getCityData() {
	const result = get('/api/citylist');
	return result;
}
