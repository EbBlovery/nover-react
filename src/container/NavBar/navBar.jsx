import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './navBar.less';

class NavBar extends Component {
	render() {
		return (
            <div class="navbar">
            	<div><Link to="/">首页</Link></div>
            	<div><Link to="/">分类</Link></div>
            	<div><Link to="/">排行</Link></div>
            	<div><Link to="/">书单</Link></div>
            	<div><Link to="/">VIP专区</Link></div>
            </div>
		)
	}
}

export default NavBar;

