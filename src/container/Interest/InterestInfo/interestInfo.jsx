import React, { Component } from 'react';

import './interestInfo.less';

class InterestInfo extends Component {
	render() {
		var item = this.props.data
		return (
            <div className="interest-div">
             	<div className="interest-left">
             		<img src={item.cover}/>
             	</div>
             	<div className="interest-right">
             		<p>{item.title}</p>
             		<p>{item.shortIntro}</p>
             		<p>{item.minorCate} | <span>{item.latelyFollower}</span>人气</p>
             	</div>
            </div>
		)
	}
}

export default InterestInfo;