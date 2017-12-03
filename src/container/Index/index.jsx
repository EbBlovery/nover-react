import React, { Component } from 'react';

import NavBar from '../../container/NavBar/navBar';

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