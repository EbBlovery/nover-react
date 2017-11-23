import React, { Component } from 'react';

import './commentDetail.less';

class CommentDetail extends Component {
	render() {
		const data = this.props.data;
		console.log(data)
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
             	</div>
             </div>
		)
	}
}

export default CommentDetail;