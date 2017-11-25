import React, { Component } from 'react';

import './commendDetail.less';

class CommendDetail extends Component {
	render() {
		const item = this.props.data;
		// if(item.book.title)
		return (
			<div className="commendDetail-div">
	           	<div className="commendDetail-left">
	           		<img src={item.cover || item.book.cover}/>
	           	</div>
	           	<div className="commendDetail-right">
	           		<p>{item.title || item.book.title}</p>
	           		<p>{item.author || item.book.author} | {item.cat || item.book.majorCate}</p>
	           		<p>{item.shortIntro || item.book.shortIntro}</p>
	           		<p><span>{item.latelyFollower || item.book.latelyFollower}</span>人气 | <span>{item.retentionRatio || item.book.retentionRatio}%</span>读者留存</p>
	           	</div>
	        </div>
		)
	}
}

export default CommendDetail;