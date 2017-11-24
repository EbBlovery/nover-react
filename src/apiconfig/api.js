import axios from 'axios';


export function getComment(id){  // 获取评论
        return axios.get(`/post/review/best-by-book?book=${id}&limit=10`).then(res=>{
			// this.setState({val:res.data.reviews})
			    return res.data.reviews
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


		