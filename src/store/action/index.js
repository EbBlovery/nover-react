import {getSearch} from '../../apiconfig/api.js';

export function handleSearch(key){
    return dispatch => {
    	getSearch(key).then(res=>{
            dispatch(getSearchData(res))
        }).catch(err=>{
        	console.log(err)
        })
    }
}

export function getSearchData(data){
	return dispatch => {
	    dispatch({
		    type:'GETNEWSINFO',
		    payload:{
		        data: data
		    }
	    })
	}
}

