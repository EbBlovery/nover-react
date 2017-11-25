import React, { Component } from 'react';

import './commendDetail.less';

class CommendDetail extends Component {
	render() {
		var item = this.props.data;
		// if(item.book.title)
		// var item = {}
		// if(items.title){
  //           item = items
		// }else{
		// 	item = item.book;
		// }
		return (
			<div className="commendDetail-div">
	           	<div className="commendDetail-left">
	           		<img src={item.cover}/>
	           	</div>
	           	<div className="commendDetail-right">
	           		<p>{item.title}</p>
	           		<p>{item.author} | {item.cat}</p>
	           		<p>{item.shortIntro}</p>
	           		<p><span>{item.latelyFollower}</span>人气 | <span>{ item.retentionRatio }%</span>读者留存</p>
	           	</div>
	        </div>
		)
	}
}

export default CommendDetail;