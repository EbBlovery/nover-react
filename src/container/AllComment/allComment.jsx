import React, { Component } from 'react';
import { connect } from 'react-redux';


import HeaderBar from '../../component/HeaderBar/headerBar';
import AllCommentDetail from '../../component/AllCommentDetail/allCommentDetail';

import { getComment } from '../../apiconfig/api.js';
import { getToMoreComments } from '../../store/action/index';

import './allComment.less';

class AllComment extends Component {
    render() {
	    return (
            <div className="allComment">
                <HeaderBar history={this.props.history} title={this.props.bookdetail?this.props.bookdetail.title:''}/>
                <AllCommentDetail loadMore={this.loadMore.bind(this)} bookdetail={this.props.bookdetail?this.props.bookdetail:''} comments={this.props.comments?this.props.comments:''} total={this.props.total?this.props.total:''}/>
            </div>
	    )
	}
    loadMore(i){
        this.props.getToMoreComments(this.props.match.params.id,i)
    }
}

function mapStateToProps(state){
    return {
        comments: state.books.comments,
        bookdetail: state.books.bookdetail,
        total: state.books.total
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getToMoreComments: (id,start)=>{
            dispatch(getToMoreComments(id,start))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllComment);

// http://api.zhuishushenqi.com/post/review/595214a1d56b6be37d8657aa/comment/?start=0&limit=10  评论的评论