import React, { Component } from 'react';

class UserComment extends Component {
	render() {
		const {data} = this.props;
		return (
            <section>
            	<div className="comment-detail">
	         		<div className="comment-left">
	         			<img src={'http://statics.zhuishushenqi.com' + data.author.avatar}/>
	         			<p>
	         				<span>{data.author.nickname}</span>
	         				<span>n天前</span>
	         			</p>
	         		</div>
	         		<div className="comment-content">
	         			<p>{data.content}</p>
	         		</div>
	         	</div>
	         	<p className="commentCount">共{data.commentCount}条回复</p>
            </section>
		)
	}
}

export default UserComment;