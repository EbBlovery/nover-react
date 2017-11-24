import React, { Component } from 'react';

import {tab} from '../../../util/util.js';

import './commentDetail.less';

class CommentDetail extends Component {
	render() {
		const data = this.props.data;
		const days =  tab((new Date(data.updated)).toLocaleDateString().split('/').join('-'));
		var day = '';
		if(days<=7){
			day = days + '天';
		}else if(day<=30){
			day = (days/7).toFixed(0) + '周'
		}else{
			day = '1月前'
		}
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
             		    <span>{day}前</span>
             		    <span>{data.likeCount}人觉得有用</span>
             		</p>
             	</div>
             </div>
		)
	}
}

export default CommentDetail;