import axios from 'axios';

// /post/review/by-book?book=537a03e9ac8932bf19003d7c&limit=10&start=0   
export function getComment(id,start = 0){  // 获取评论
	return axios.get(`/post/review/by-book?book=${id}&limit=10&start=${start}`).then(res=>{
	// this.setState({val:res.data.reviews})
	    return res.data
	}).catch(err=>{
	    console.log(err)
	})
}

export function getRecommend(id){  //获取推荐列表
    return  axios.get(`http://novel.juhe.im/recommend/${id}`).then(res=>{
        // this.setState({recommend:res.data.data.books})
        return res.data.data.books
	}).catch(err=>{
		console.log(err)
	})
}

export function getCommentDetail(id,start = 0){
	return axios.get(`/post/review/${id}/comment/?start=${start}&limit=10`).then(res=>{
		return res.data.comments
	}).catch(err=>{
		console.log(err)
	})
}

export function getSearch(key){
    return axios.get(`http://novel.juhe.im/search?keyword=${key}`).then(res=>{
    	return res.data.data
    }).catch(err=>{
    	console.log(err)
    })
}

export function getBook(id) {
    return axios.get(`http://novel.juhe.im/book-info/${id}`).then(res=>{
         return res.data
    })
}
 //http://api.zhuishushenqi.com/ctoc?view=summary&book=
export function getChapter(id){
    //  http://novel.juhe.im/book-sources?view=summary&book=
    return axios.get(`http://novel.juhe.im/book-sources?view=summary&book=${id}`).then(res=>{
    	return res.data;
    }).catch(err=>{
    	console.log(err)
    })
}

export function getSection(id){
    return axios.get(`http://novel.juhe.im/book-chapters/${id}`).then(res=>{
    	return res.data.data
    })
}

export function getContent(link){
	return axios.get(`/chapter/${link}`).then(res=>{
        console.log(res)
		return res.data.chapter
	})
}



// http://api.zhuishushenqi.com/recommendPage/node/books/all/578351b97fa1aac6396a3cd2?   //ajax=ajax&st=1&size=10

//  vip 推荐 api
		