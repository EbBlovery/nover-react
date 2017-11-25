import React, { Component } from 'react';

import Header from '../../container/Header/header';
import NavBar from '../../container/NavBar/navBar';
import Content from '../Content/content';
import Footer from '../Footer/footer';

import './index.less';

class Index extends Component {
	render(){
		return (
             <div className="main">
             	<Header />
             	<NavBar />
             	<div className="containers">
             	    <Content />
             	</div>
                  <Footer />
             </div>
		)
	}
}

export default Index;