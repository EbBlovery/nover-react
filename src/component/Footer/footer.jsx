import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './footer.less';

class Footer extends Component {
	render(){
		return (
            <div className="footer">
            	<div className="footer-search">
                    <label>
                    	<input type="text" />
                    	<button>搜索</button>
                    </label>
            	</div>
            	<div className="footer-navbar">
	            	<div><Link to="/">首页</Link></div>|
	            	<div><Link to="/">分类</Link></div>|
	            	<div><Link to="/">排行</Link></div>|
	            	<div><Link to="/">书单</Link></div>|
	            	<div><Link to="/">VIP专区</Link></div>
            	</div>
            	<div className="category">
            		<p>ICP:xxxxxxxxxxxx12号Copynight @ 2017</p>
            		<p>电话：123123123123</p>
            	</div>
            </div>
		)
	}
}

export default Footer;