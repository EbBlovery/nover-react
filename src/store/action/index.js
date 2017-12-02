import {getSearch,fetchGenderData,getSubCategories,getRanking,fetchRankList} from '../../apiconfig/api.js';

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

/*=======================================================================================================================================*/

export function getGender(gender,major,type,minor,start) {
    return dispatch => {
    	fetchGenderData(gender,major,type,minor,start).then(res=>{  // 获取子分类
    		dispatch(getGenderInfo(res))
    	})
    }
}

export function getGenderInfo(data) {  // 子分类信息
    return dispatch =>{
    	dispatch({
	    	type: 'GETGENDERINFO',
	    	payload:{
	    		data:data
	    	}
	    })
    } 
}

export function getMoreBooks(gender,major,type,minor,start){
	return dispatch => {
		fetchGenderData(gender,major,type,minor,start).then(res=>{  // 获取子分类
    		dispatch(getMoreGenderInfo(res))
    	})
	}
}
export function getMoreGenderInfo(data) {  // 子分类信息
    return dispatch =>{
    	dispatch({
	    	type: 'GETMOREGENDERINFO',
	    	payload:{
	    		data:data
	    	}
	    })
    } 
}

/*=======================================================================================================================================*/

export function getSub(type,index){
    return dispatch => {
    	getSubCategories(type,index).then(res=>{
    		dispatch(getSubTitle(res))
    	})
    }
}

export function getSubTitle(data) {
    return dispatch => {
    	dispatch({
    		type: 'GETSUBTITLE',
    		payload: {
    			data: data
    		}
    	})
    }
}

/*=======================================================================================================================================*/

// ranking

export function getRankingDetail(){
     return dispatch => {
         getRanking().then(res=>{
            dispatch({
                type: 'RANKING_DETAIL',
                payload: {
                    data: res
                }
            })
         })
     }
}

export function getRankList(id){
    return dispatch => {
        fetchRankList(id).then(res=>{
            dispatch({
                type: 'GETRANKLIST',
                payload: {
                    data: res
                }
            })
        })
    }
}

export function getOtherRankList(id){
    return dispatch => {
        fetchRankList(id).then(res=>{
            dispatch({
                type: 'GETOTHERRANKLIST',
                payload: {
                    data: res
                }
            })
        })
    }
}