import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CommentDetail from './CommentDetail';

import './comment.less';

class Comment extends Component {
	render() {
		var data = this.props.data;
		return (
			<ul className="comment-ul">
	            {
	            	data.map((item,index)=>{
                        return (
                            <li key={index}>
                            	<Link to="/">
                                    <CommentDetail data={item}/>
                            	</Link>
                            </li>
                        )
	            	})
	            }
            </ul>
		)
	}
}

export default Comment;