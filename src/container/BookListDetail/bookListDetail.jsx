import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderBar from '../../component/HeaderBar/headerBar';

import {getBookListContent} from '../../store/action/index';

class BookListDetail extends Component {
	componentDidMount(){
        this.props.getBookListContent(this.props.match.params.id)
	}
	render() {
		return (
            <div>
            	<HeaderBar title="我的书架" history={this.props.history}/>
            	
            </div>
		)
	}
}

function mapStateToProps(state){
	return {

	}
}

function mapDispatchToProps(dispatch){
	return {
        getBookListContent: (id) => {
        	dispatch(getBookListContent(id))
        }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(BookListDetail);