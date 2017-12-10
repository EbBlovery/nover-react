import React, { Component } from 'react';

import './headerNavBar.less';

class HeaderNavBar extends Component {
	render() {
		return (
			<div className="headerBarNav">
			    <div style={{display:'none'}} className="headerNavBar-title">
			    	<nav>
	            	    <div>本周最热</div>
		            	<div>最新发布</div>
		            	<div>最多收藏</div>
		            </nav>
		            <nav>
		            	<ul>
		            		<li>全部</li>
		            		<li>男生</li>
		            		<li>女生</li>
		            		<li>玄幻</li>
		            		<li>都市</li>
		            		<li>总裁</li>
		            	</ul>
		            	<span>筛选</span>
		            </nav>
			    </div>
	            <div className="headerNavBar-click">
	            	<p>asdasdasdadasd</p>
	            </div>
            </div>
		)
	}
}

export default HeaderNavBar;