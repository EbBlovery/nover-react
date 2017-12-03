import {combineReducers} from 'redux';

import search from './module/search';
import getGender from './module/getGender';
import Ranking from './module/Ranking';
import books from './module/books';

export default combineReducers({
	search,
	getGender,
	Ranking,
	books
}) 