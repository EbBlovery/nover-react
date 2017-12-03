import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../Comment/comment';

import './bookComment.less';

class BookComment extends Component {
	render() {
		const {comments,bookdetail} = this.props;
		var info = (comments && comments.reviews)?comments.reviews.slice(0,2):''

		return (
            <div className="hot-comment">
    		    <div className="comment-header">
                    <span>
                    	热门书评
                    </span>
                    <span>
                    	<Link to={{
                            // this.props.location.state.data.book._id
                    		pathname:"/allcomment/" + this.props.match.params.id,
                            state: {comment:comments && comments,title:bookdetail.title,total:comments && comments.total}
                        }}>
                    	    更多评论
                    	</Link>
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
}

export default BookComment;