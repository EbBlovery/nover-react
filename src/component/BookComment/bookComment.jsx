import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../Comment/comment';

import './bookComment.less';

class BookComment extends Component {
	render() {
		const {comments,bookdetail} = this.props;
		var info = comments?comments.slice(0,2):''
		return (
            <div className="hot-comment">
    		    <div onClick={this.getMoreComment.bind(this,bookdetail.title)} className="comment-header">
                    <span>
                    	热门书评
                    </span>
                    <span>
                        更多评论
                    </span>
                </div>
    		    <div>
        		    {
        				info.length<=0?(<div className="no-comment">暂无评论~</div>):(
                       	    <Comment title={bookdetail && bookdetail.title} data={info} />
        				)
        			}
    			</div>
    		</div>
		)
	}
    getMoreComment(title){
        this.props.onGetMoreComment(title)
    }
}

export default BookComment;