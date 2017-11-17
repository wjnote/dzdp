import {
	get
} from '../get';

export function getSearchData(cityName, keyword, id, page) {
	const result = get('/api/search/' + encodeURIComponent(cityName) +'/'+ encodeURIComponent(keyword) +'/'+ id +'/' + page);
	return result;
}