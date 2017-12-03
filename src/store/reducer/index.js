import {combineReducers} from 'redux';

import getGender from './module/getGender';
import Ranking from './module/Ranking';
import books from './module/books';
import homeRecommend from './module/homeRecommend';

export default combineReducers({
	getGender,
	Ranking,
	books,
	homeRecommend
}) 