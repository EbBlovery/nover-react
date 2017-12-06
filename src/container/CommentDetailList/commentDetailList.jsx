import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import HeaderBar from '../../component/HeaderBar/headerBar';
import UserComment from '../../component/UserComment/userComment'
import UserCommentList from '../../component/UserCommentList/userCommentList';

import {bookUserComment,getMoreUserComment} from '../../store/action/index';


import './commentDetailList.less';

class CommentDetailList extends Component {
    componentDidMount(){
        this.props.bookUserComment(this.props.match.params.id)
    }
    render(){
        const {data,title} = this.props.location.state
    	return (
            <div className="commentAvator">
             	<HeaderBar history={this.props.history} title={title}/>
                <UserComment data={data?data:''}/>
                <UserCommentList LoadMore={this.LoadMore.bind(this)} len={data.count} userCommment={this.props.userCommment?this.props.userCommment:''}/>
            </div>
    	)
    }
    LoadMore(count){
        this.props.getMoreUserComment(this.props.match.params.id,count)
    }
}
function mapStateToProps(state){
    return {
        userCommment: state.books.userCommment
    }
}

function mapDispatchToProps(dispatch){
    return {
        bookUserComment: (id,start)=>{
            dispatch(bookUserComment(id,start))
        },
        getMoreUserComment: (id,start)=> {
            dispatch(getMoreUserComment(id,start))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentDetailList);