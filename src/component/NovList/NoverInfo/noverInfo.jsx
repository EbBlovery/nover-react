import React, { Component } from 'react';

import './noverInfo.less';

class NoverInfo extends Component {
	render() {
		var item = this.props.data
		return (
            <div className="novlist-div">
             	<div className="novlist-left">
             		<img src={item.book.cover}/>
             	</div>
             	<div className="novlist-right">
             		<p>{item.book.title}</p>
             		<p>{item.book.shortIntro}</p>
             		<p>{item.book.minorCate} | <span>{item.book.latelyFollower}</span>人气</p>
             	</div>
            </div>
		)
	}
}

export default NoverInfo;