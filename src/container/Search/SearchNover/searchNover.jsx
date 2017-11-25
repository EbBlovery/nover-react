import React, { Component } from 'react';

import Recommend from '../../Recommend/recommend';

class SearchNover extends Component {
	render() {
		return (
            <div>
            	<Recommend history={this.props.history} title='sadasdasd'/>
            </div>
		)
	}
}

export default SearchNover;