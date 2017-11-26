import React, { Component } from 'react';

import {tab} from '../../../util/util.js';

import './commentDetail.less';

class CommentDetail extends Component {
	render() {
		const data = this.props.data;
		const days =  tab((new Date(data.updated)).toLocaleDateString().split('/').join('-'));
		
		return (
             <div className="commentDetail">
             	<div className="comment-avator">
             		<img src={'http://statics.zhuishushenqi.com' + data.author.avatar} />
             	</div>
             	<div className="commet-info">
             		<p>{data.author.nickname}</p>
             		<p>{data.title}</p>
             		<p>{data.rating}</p>
             		<p>{data.content}</p>
             		<p>
             		    <span>{days}</span>
             		    <span>{data.likeCount}人觉得有用</span>
             		</p>
             	</div>
             </div>
		)
	}
}

export default CommentDetail;