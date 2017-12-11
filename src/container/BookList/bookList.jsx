import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderBar from '../../component/HeaderBar/headerBar';
import HeaderNavBar from '../../component/HeaderNavBar/headerNavBar';
import BookListContent from '../../component/BookListContent/bookListContent';
import BookTagList from '../../component/BookTagList/bookTagList';

import {getBookList} from '../../store/action/index';
 
import './bookList.less';

class BookList extends Component {
	constructor(props){
		super(props)
		this.state = {
			sort: 'collectorCount',
			duration:'last-seven-days',
			start: 0
		}
	}
	componentDidMount(){
        this.props.getBookList()
	}
	render() {
		return (
            <div>
                <HeaderBar title="主题书单" history={this.props.history}/>
                <HeaderNavBar
                    wentToSort = {this.wentToSort.bind(this)}
                    wentToTag = {this.wentToTag.bind(this)}
                />
                <BookListContent
                    booklists={this.props.booklists?this.props.booklists:''}
                    wengToBookList={this.wengToBookList.bind(this)}
                />
                <BookTagList />
            </div>
		)
	}
	wengToBookList(id){        //  点击路由跳转 查看书单
		this.props.history.push('/booklist/' + id)
	}
	wentToSort(sort,duration){       //  大分类信息  三个列表  
        this.props.getBookList(sort,duration)
        this.setState({sort:sort,duration:duration})
	}
	wentToTag(tag){   //  tag    细节获取
        this.props.getBookList(this.state.sort,this.state.duration,this.state.start,tag)
	}
}

function mapStateToProps(state){
	return {
        booklists: state.booklist.booklists,
        booktotal: state.booklist.booktotal
	}
}

function masDispatchToProps(dispatch){
	return {
        getBookList: (sort,duration,start,tag) => {
        	dispatch(getBookList(sort,duration,start,tag))
        }
	}
}

export default connect(mapStateToProps,masDispatchToProps)(BookList)