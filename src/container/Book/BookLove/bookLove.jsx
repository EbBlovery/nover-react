import React, { Component } from 'react';

import CommendList from '../../NovCommend/CommendList/commendList';

class BookLove extends Component {
	render() {
		const data = this.props.data;
		console.log(data)
		return (
            <div>
            	<CommendList data={data}/>
            </div>
		)
	}
}

export default BookLove;