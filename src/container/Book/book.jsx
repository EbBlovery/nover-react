import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import { getRecommend, getComment, getBook } from '../../apiconfig/api.js';

import {BookDetails,BookComments,BookReCommends} from '../../store/action/index';

import HeaderBar from '../../component/HeaderBar/headerBar';
import Footer from '../../component/Footer/footer'
import BookRecommend from '../../component/BookRecommend/bookRecommend';    //  类似小说推荐列表
import BookDetail from '../../component/BookDetail/bookDetail';
import BookComment from '../../component/BookComment/bookComment';

import SectionContents from '../SectionContents/SectionContents';




import './book.less';

class Book extends Component {
	componentDidMount(){
        var id =this.props.match.params.id;
        this.props.BookDetails(id)
        this.props.BookComments(id)
        this.props.BookReCommends(id)

	}
    componentWillReceiveProps(){
        var id =this.props.match.params.id;
    }
    shouldComponentUpdate(a,b){         // 一直返回true 只要数据变更就重新render； 变更糟 componentWillReceiveProps 里边
    	return true;
    }
	render() {
		return (
            <div className="book">
            	<HeaderBar title="书籍详情" history={this.props.history} />
                <BookDetail bookdetail={this.props.bookdetail?this.props.bookdetail:''}/>
                <BookComment match={this.props.match} bookdetail={this.props.bookdetail?this.props.bookdetail:''} comments={this.props.comments?this.props.comments:''}/>
            	
            	<div className="book-love">
                	{
                        this.props.recommends && this.props.recommends.length>0 
                            ?
                            (<BookRecommend changeBookDetail={this.changeBookDetail.bind(this)} pathname={this.props.location.pathname} data={this.props.recommends?this.props.recommends:''} />)
                            :
                            (<div></div>)
                	}
            	</div>
            	<Footer history={this.props.history}/>
            </div>
		)
	}
    changeBookDetail(id){
        this.props.BookDetails(id)
        this.props.BookComments(id)
        this.props.BookReCommends(id)
        this.props.history.replace('/book/' +  id)
    }
}



function mapStateToProps(state){
    return {
        comments: state.books.comments,
        bookdetail: state.books.bookdetail,
        recommends: state.books.recommends
    }
}

function mapDispatchToProps(dispatch){
    return {
        BookDetails: (id)=>{
            dispatch(BookDetails(id))
        },
        BookComments: (id)=>{
            dispatch(BookComments(id))
        },
        BookReCommends: (id)=>{
            dispatch(BookReCommends(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Book);


