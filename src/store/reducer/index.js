import {combineReducers} from 'redux';

import search from './module/search';
import getGender from './module/getGender';
import Ranking from './module/Ranking';

export default combineReducers({
	search,
	getGender,
	Ranking
}) 