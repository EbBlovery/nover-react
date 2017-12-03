import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import HeaderBar from '../../component/HeaderBar/headerBar';
import CommentDetail from '../../component/Comment/CommentDetail';

import { getComment } from '../../apiconfig/api.js';

import './allComment.less';



// http://api.zhuishushenqi.com/post/review/by-book?book=57a0440120f42818196444b2&limit=10&start=10
// http://localhost:3000       /post/review/by-book?book=57a0440120f42818196444b2&limit=10&start=10

class AllComment extends Component {
    constructor(props){
        super(props)
        this.state = { count: 10,comment: [], title: '' }
    }
    componentDidMount(){
        // console.log(this.props.location.state)
        const {comment, title} = this.props.location.state;
        console.log(this.props.location.state)
        this.setState({comment:comment.reviews,title:title})
    }
    loadMore(){
        this.setState({count: this.state.count + 10})
        const id = this.props.history.location.pathname.split('/allcomment/')[1];
        getComment(id,this.state.count).then(res=>{
            res.reviews.unshift(...this.state.comment);  //  圆满解决动态添加问题  必须使用unshift
            // console.log(this.state.comment,res.reviews)
            this.setState({comment: res.reviews});
        })
    }
    render() {
	// var item = this.props.data
    const {total} = this.props.location.state;
	return (
            <div className="allComment">
                <div>
                    <HeaderBar history={this.props.history} title={this.state.title}/>
                </div>
                <div className="allComment-list">
                    <ul>
                        {
                            this.state.comment && this.state.comment.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <Link to={{
                                            pathname:"/commentdetaillist/"+ item._id,
                                            state:{title: this.state.title,data:item,id:item._id}
                                        }}>
                                            <CommentDetail data={item}/>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="loadMore">
                    {
                        this.state.count<total?(<p onClick={this.loadMore.bind(this)}>Load More ...</p>):(<p>没有更多评论</p>)
                    }
                </div>
            </div>
	    )
	}
}

export default AllComment;

// http://api.zhuishushenqi.com/post/review/595214a1d56b6be37d8657aa/comment/?start=0&limit=10  评论的评论