import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CommentDetail from './CommentDetail';

import './comment.less';

class Comment extends Component {
	render() {
		var {data,title} = this.props;
		return (
			<ul className="comment-ul">
	            {
	            	data.map((item,index)=>{
	            		console.log(item)
                        return (
                            <li key={index}>
                            	<Link to={{
                                    pathname:"/commentdetaillist/" + item._id,
                                    state:{data:item,id:item._id,title: title}
                                }}>
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