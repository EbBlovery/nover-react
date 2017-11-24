import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import HeaderBar from '../../component/HeaderBar/headerBar';
import CommentDetail from '../Book/Comment/CommentDetail';

import './allComment.less';

class AllComment extends Component {
      render() {
	    // var item = this.props.data
      const {comment, title} = this.props.location.state;
	  return (
            <div className="allComment">
                <div>
                  <HeaderBar history={this.props.history} title={title}/>
                </div>
                <div className="allComment-list">
                  <ul>
                     {
                        comment.map((item,index)=>{
                            return (
                                <li key={index}>
                                  <Link to={{
                                    pathname:"/commentdetaillist/"+ item._id,
                                    state:{title: title,data:item,id:item._id}
                                }}>
                                        <CommentDetail data={item}/>
                                  </Link>
                                </li>
                            )
                        })
                      }
                  </ul>
                </div>
            </div>
	    )
	}
}

export default AllComment;

// http://api.zhuishushenqi.com/post/review/595214a1d56b6be37d8657aa/comment/?start=0&limit=10  评论的评论