import {fetchBookContent,fetchBookList,getCommentDetail,getSearch,fetchGenderData,getSubCategories,getRanking,fetchRankList,  getRecommend, getComment, getBook,getVal,fetchClassify,getSection, getChapter,getContent} from '../../apiconfig/api.js';

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

export function bookUserComment(id){
    return dispatch => {
        getCommentDetail(id).then(res=>{
            dispatch({
                type: 'BOOKUSERCOMMENT',
                payload: {
                    data: res
                }
            })
        })
    }
}

export function getMoreUserComment(id,start){
    return dispatch => {
        getCommentDetail(id,start).then(res=>{
            dispatch({
                type: 'GETMOREUSERCOMMENT',
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

// boookchapter

export function getChapterList(id){      // 获取优质书源的章节列表
    return dispatch => {
        getChapter(id).then(res=>{
            getSection(res.data[0]._id).then(rest=>{
                //this.setState({data:rest.chapters,title:rest.name,source:res.data,bookTitle:title})  // 更新章节列表
                dispatch({
                    type: 'GETCHAPTERLIST',
                    payload: {
                        chapter: rest.chapters,
                        source: res.data
                    }
                })
            })
        })
    }
}

export function getChangeSourceChapterList(id){  // 获取换源后的小说章节列表
    return dispatch => {
        getSection(id).then(rest=>{
            //this.setState({data:rest.chapters,title:rest.name,source:res.data,bookTitle:title})  // 更新章节列表
            dispatch({
                type: 'GETCHANGESOURCECHAPTERLIST',
                payload: {
                    chapter: rest.chapters
                }
            })
        })
    }
}

export function getChapterContent(link){  
    return dispatch => {
        getContent(link).then(res=>{
            if(res.isVip){
                const vip = ['VIP章节，不给看！'];
                dispatch({
                    type: 'GETCHAPTERCONTENT',
                    payload: {
                         body: vip
                    }
                })
            }else{
                var arr = res.cpContent.split(/\s+/g);
                dispatch({
                    type: 'GETCHAPTERCONTENT',
                    payload: {
                        body: arr
                    }
                })
            }
            
        })
    }
}

export function getChangeSourceChapterContent(link){   //   获取其他书源的章节内容
    return dispatch => {
        getContent(link).then(res=>{
            var arr = res.body.split(/\s+/g);
            dispatch({
                type: 'GETCHANGESOURCECHAPTER',
                payload: {
                    body: arr
                }
            })
        })
    }
}

/*=======================================================================================================================================*/

//  主题书单


export function getBookList(sort,duration,start,tag){
    return dispatch => {
        fetchBookList(sort,duration,start,tag).then(res=>{
            console.log(res)
            dispatch({
                type: 'GETBOOKLIST',
                payload: {
                    data: res.bookLists,
                    total: res.total
                }
            })
        })
    }
}

export function getBookListContent(id){
    return dispatch => {
        fetchBookContent(id).then(res=>{
            console.log(res)
            dispatch({
                type: 'GETBOOKLISTCONTENT',
                payload: {
                    data: res
                }
            })
        })
    }
}

