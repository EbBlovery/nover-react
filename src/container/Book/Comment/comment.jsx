import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CommentDetail from './CommentDetail';

class Comment extends Component {
	render() {
		var data = this.props.data;
		return (
			<ul>
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