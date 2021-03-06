import axios from 'axios';

// /post/review/by-book?book=537a03e9ac8932bf19003d7c&limit=10&start=0   
const url = process.env.NODE_ENV == 'development'?'http://localhost:3001':'http://59.110.241.135:3001';

export function getVal(id){       // 获取首页信息
    return axios.get(`${url}/recommendPage/node/books/all/${id}`).then(res=>{
        return res.data.data
    }).catch(err=>{
        console.log(err)
    })
}

console.log(process.env.NODE_ENV)


export function getComment(id,start = 0){  // 获取评论
	return axios.get(`${url}/post/review/by-book?book=${id}&limit=10&start=${start}`).then(res=>{
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
	return axios.get(`${url}/post/review/${id}/comment/?start=${start}&limit=10`).then(res=>{
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
    }).catch(err=>{
        console.log(err)
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
    }).catch(err=>{
        console.log(err)
    })
}

export function getContent(link){
	return axios.get(`${url}/chapter/${link}`).then(res=>{
		return res.data.chapter
	}).catch(err=>{
        console.log(err)
    })
}

export function fetchClassify(){
    return axios.get('http://novel.juhe.im/categories').then(res=>{
        return res.data
    }).catch(err=>{
        console.log(err)
    })
}

export function fetchGenderData(gender,major,type = 'hot',minor='',start = 0){
    return axios.get(`http://novel.juhe.im/category-info?gender=${gender}&type=${type}&major=${major}&minor=${minor}&start=${start}&limit=20`).then(res=>{
        return res.data.data
    }).catch(err=>{
        console.log(err)
    })
}

export function getSubCategories(type,index){
    return axios.get(`http://novel.juhe.im/sub-categories`).then(res=>{
        if(type == "male"){
            return res.data.data.male[index]
        }else if(type == "female"){
            return res.data.data.female[index]
        }else{
            return res.data.data.press[index]
        }
    }).catch(err=>{
        console.log(err)
    })
}



export function getRanking(){
    return axios.get(`http://novel.juhe.im/rank-category`).then(res=>{
        return res.data.data
    }).catch(err=>{
        console.log(err)
    })
}


export function fetchRankList(id){
    return axios.get(`http://novel.juhe.im/rank/${id}`).then(res=>{
        return res.data.data.ranking
    }).catch(err=>{
        console.log(err)
    })
}

export function fetchBookList(sort = 'collectorCount',duration = 'last-seven-days',start = 0,tag = ''){
    return axios.get(`${url}/book-list?sort=${sort}&duration=${duration}&start=${start}&${tag}`).then(res=>{
        return res.data
    }).catch(err=>{
        console.log(err)
    })
}

export function fetchBookContent(id){
    return axios.get(`http://novel.juhe.im/booklists/${id}`).then(res=>{
        return res.data.data.bookList
    }).catch(err=>{
        console.log(err)
    })
}

// http://api.zhuishushenqi.com/recommendPage/node/books/all/578351b97fa1aac6396a3cd2?   //ajax=ajax&st=1&size=10

//  vip 推荐 api

		