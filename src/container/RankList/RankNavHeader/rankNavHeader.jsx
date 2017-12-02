import React, { Component } from 'react';

import HeaderBar from '../../../component/HeaderBar/headerBar';

import './rankNavHeader.less';

class RankNavHeader extends Component {
	render() {
		const {rankTitle,rankId} = this.props;
		console.log(rankId)
		return (
             <div>
            	<HeaderBar history={this.props.history} title={rankTitle && rankTitle} />
            	<div className="rankdetail-nav">
	             	<nav>
	             		<p onClick={this.handleGetDetail.bind(this,rankId.weekRank)}>周榜</p>
	             		<p onClick={this.handleGetDetail.bind(this,rankId.monthRank)}>月榜</p>
	             		<p onClick={this.handleGetDetail.bind(this,rankId.totalRank)}>总榜</p>
	             	</nav>
	            </div>
             </div>
		)
	}
	handleGetDetail(id){
        const {getDetailRank} = this.props;
        getDetailRank(id)
	}
}

export default RankNavHeader;