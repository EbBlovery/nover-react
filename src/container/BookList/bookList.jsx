import React, { Component } from 'react';

import HeaderBar from '../../component/HeaderBar/headerBar';
import HeaderNavBar from '../../component/HeaderNavBar/headerNavBar';

import './bookList.less';

class BookList extends Component {
	render() {
		return (
            <div>
                <HeaderBar title="主题书单" history={this.props.history}/>
                <HeaderNavBar />
            </div>
		)
	}
}

export default BookList