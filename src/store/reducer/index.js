import {combineReducers} from 'redux';

import search from './module/search';
import getGender from './module/getGender';
import getSubTitle from './module/getSubTitle';

export default combineReducers({
	search,
	getGender,
	getSubTitle
}) 