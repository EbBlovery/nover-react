import React, { Component } from 'react';

import HeaderBar from '../../component/HeaderBar/headerBar';

class Book extends Component {
	render() {
		console.log(this.props.location.state)
		return (
            <div>
            	<HeaderBar title="书籍详情" history={this.props.history} />
            </div>
		)
	}
}

export default Book;