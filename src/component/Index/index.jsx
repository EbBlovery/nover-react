import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from '../../container/NavBar/navBar';
import Content from '../Content/content';
import Footer from '../Footer/footer';

import './index.less';

class Index extends Component {
	render(){
		return (
            <div className="main">
                <NavBar match={this.props.match} history={this.props.history}/>
            </div>
		)
	}
}

export default Index;