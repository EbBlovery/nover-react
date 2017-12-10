import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderBar from '../../component/HeaderBar/headerBar';
import HeaderNavBar from '../../component/HeaderNavBar/headerNavBar';
import BookListContent from '../../component/BookListContent/bookListContent';

import {getBookList} from '../../store/action/index';
 
import './bookList.less';

class BookList extends Component {
	componentDidMount(){
        this.props.getBookList()
	}
	render() {
		return (
            <div>
                <HeaderBar title="主题书单" history={this.props.history}/>
                <HeaderNavBar />
                <BookListContent booklists={this.props.booklists?this.props.booklists:''}/>
            </div>
		)
	}
}

function mapStateToProps(state){
	console.log(state)
	return {
        booklists: state.booklist.booklists,
        booktotal: state.booklist.booktotal
	}
}

function masDispatchToProps(dispatch){
	return {
        getBookList: () => {
        	dispatch(getBookList())
        }
	}
}

export default connect(mapStateToProps,masDispatchToProps)(BookList)