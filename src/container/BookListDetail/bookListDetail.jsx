import React, { Component } from 'react';
import HeaderBar from '../../component/HeaderBar/headerBar';

class BookListDetail extends Component {
	render() {
		return (
            <div>
            	<HeaderBar title="我的书架" history={this.props.history}/>
            	
            </div>
		)
	}
}

export default BookListDetail;