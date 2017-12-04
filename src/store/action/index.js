import {getSearch,fetchGenderData,getSubCategories,getRanking,fetchRankList,  getRecommend, getComment, getBook,getVal,fetchClassify} from '../../apiconfig/api.js';

export function handleSearch(key){  // search
    return dispatch => {
    	getSearch(key).then(res=>{
            dispatch({
                type:'GETNEWSINFO',
                payload:{
                    data: res,
                    title: key
                }
            })
        }).catch(err=>{
        	console.log(err)
        })
    }
}

/*=======================================================================================================================================*/
  //分类信息
export function getClassify() {
    return dispatch => {
        fetchClassify().then(res=>{
            dispatch({
                type: 'GETCLASSIFY',
                payload: {
                    data:res
                }
            })
        })
    }
}




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


/*=======================================================================================================================================*/

// book detail info;

export function BookDetails(id){
    return dispatch => {
        getBook(id).then(res=>{
            dispatch({
                type: 'BOOKDETAILS',
                payload: {
                    data: res.data
                }
            })
        })
    }
}
export function BookComments(id,start){      // book comment 评论
    return dispatch => {
        getComment(id,start).then(res=>{
            dispatch({
                type: 'BOOKCOMMENTS',
                payload: {
                    data: res
                }
            })
        })
    }
}

// 长得像  注意区分
export function BookReCommends(id){   // book commend 推荐
    return dispatch => {
        getRecommend(id).then(res=>{
            dispatch({
                type: 'BOOKRECOMMENDS',
                payload: {
                    data: res
                }
            })
        })
    }
}

export function getToMoreComments(id,start) {
    return dispatch => {
        getComment(id,start).then(res=>{
            dispatch({
                type: 'GETTOMORECOMMENTS',
                payload: {
                    data: res.reviews
                }
            })
        })
    }
}


/*=======================================================================================================================================*/

export function getHomeCommend(){  //  首页信息
    return dispatch => {
        Promise.all([getVal('5912825ba1dbf3ad33ee7ffe'),getVal('59128334694d1cda365b8985'),getVal('59128365e5a3262c37488e3d'),getVal('5912a9d08973b2fe33614642'),getVal('5912aa17e647570434175d34'),getVal('5912872f8973b2fe3361463f'),getVal('591284376e2e237c36d7b8bd')])
            .then(res=>{
                dispatch({
                    type: 'GETHOMECOMMEND',
                    payload:{
                        data:res
                    }
                })
            }).catch(err=>{
                 console.log(err)
            })
    }
}

export function getMoreRecommend(id) {
    return dispatch => {
        getVal(id).then(res=>{
            dispatch({
                type: 'GETMORERECOMMEND',
                payload: {
                    data: res
                }
            })
        })
    }
}

/*=======================================================================================================================================*/

