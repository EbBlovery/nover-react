import React, { Component } from 'react';

import Header from '../../container/Header/header';
import NavBar from '../../container/NavBar/navBar';
import Content from '../Content/content';

import './index.less';

class Index extends Component {
	render(){
		return (
             <div>
             	<Header />
             	<NavBar />
             	<div className="containers">
             	    <Content />
             	</div>
             </div>
		)
	}
}

export default Index;