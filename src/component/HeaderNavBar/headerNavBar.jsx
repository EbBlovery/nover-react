import React, { Component } from 'react';

import './headerNavBar.less';

class HeaderNavBar extends Component {
	render() {
		return (
			<div className="headerBarNav">
			    <div className="headerNavBar-title">
			    	<nav>
	            	    <div onClick={this.handleToHot.bind(this,'collectorCount','last-seven-days')}>本周最热</div>
		            	<div onClick={this.handleToHot.bind(this,'created','all')}>最新发布</div>
		            	<div onClick={this.handleToHot.bind(this,'collectorCount','all')}>最多收藏</div>
		            </nav>
		            <nav>
		            	<ul>
		            		<li onClick={this.handleToTag.bind(this)}>全部</li>
		            		<li onClick={this.handleToTag.bind(this,'gender=male')}>男生</li>
		            		<li onClick={this.handleToTag.bind(this,'gender=female')}>女生</li>
		            		<li onClick={this.handleToTag.bind(this,'tag=玄幻')}>玄幻</li>
		            		<li onClick={this.handleToTag.bind(this,'tag=都市')}>都市</li>
		            		<li onClick={this.handleToTag.bind(this,'tag=总裁')}>总裁</li>
		            	</ul>
		            	<span>筛选</span>
		            </nav>
			    </div>
	            <div style={{display:'none'}} className="headerNavBar-click">
	            	<p>asdasdasdadasd</p>
	            </div>
            </div>
		)
	}
	handleToHot(sort,duration){
        this.props.wentToSort(sort,duration)
	}
	handleToTag(tag){
        this.props.wentToTag(tag)
	}
}

export default HeaderNavBar;