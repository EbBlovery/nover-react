import {combineReducers} from 'redux';

import search from './module/search';
import getGender from './module/getGender';

export default combineReducers({
	search,
	getGender
}) 