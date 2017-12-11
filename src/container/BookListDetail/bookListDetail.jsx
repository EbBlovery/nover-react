import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderBar from '../../component/HeaderBar/headerBar';
import BookListDetailContent from '../../component/BookListDetailContent/bookListDetailContent';

import {getBookListContent} from '../../store/action/index';

import './bookListDetail.less';

class BookListDetail extends Component {
	componentDidMount(){
        this.props.getBookListContent(this.props.match.params.id)
	}
	render() {
		return (
            <div className="bookList-container">
            	<HeaderBar title="我的书架" history={this.props.history}/>
            	<BookListDetailContent bookcontent={this.props.bookcontent?this.props.bookcontent:''}/>
            </div>
		)
	}
}

function mapStateToProps(state){
	return {
        bookcontent: state.booklist.bookcontent
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