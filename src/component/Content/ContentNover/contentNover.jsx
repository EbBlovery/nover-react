import React, { Component } from 'react';

import NovList from '../../../container/NovList/novList'

class ContentNover extends Component {
	render(){
		return (
             <div key="index">
             	<NovList data={this.props.data[0]}/>
                  <NovList data={this.props.data[1]}/>
             </div>
		)
	}
}

export default ContentNover;