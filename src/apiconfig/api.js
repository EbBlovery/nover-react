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


		