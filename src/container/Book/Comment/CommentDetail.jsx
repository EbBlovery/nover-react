import React, { Component } from 'react';

class CommentDetail extends Component {
	render() {
		const data = this.props.data;
		console.log(data)
		return (
             <div>
             	<div>
             		<img src={'http://statics.zhuishushenqi.com' + data.author.avatar} />
             	</div>
             	<div>
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