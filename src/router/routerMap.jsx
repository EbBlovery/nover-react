import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

import Index from '../container/Index/index';             //  主页 路由；
import Recommend from '../container/Recommend/recommend';  // 首页书籍详细列表
import Book from '../container/Book/book';              //  小说内容信息
import Interest from '../container/Interest/interest';  //  推荐小说全部列表
import AllComment from '../container/AllComment/allComment';    //  小说全部评论
import CommentDetailList from '../container/CommentDetailList/commentDetailList';   // 细节评论；
import SearchNover from '../container/SearchNover/searchNover';
import SectionContents from '../container/SectionContents/SectionContents';
import ReadContent from '../container/ReadContent/readContent';
import Gender from '../container/Gender/gender';
import RankList from '../container/RankList/rankList';
import BookCase from '../container/BookCase/bookCase';
import BookList from '../container/BookList/bookList';
import BookListDetail from '../container/BookListDetail/bookListDetail'

class RouterMap extends Component {
	render() {
		return (
             <Router>
             	<Switch>
                    <Route path="/index" component={Index}/>
             		<Route exact path="/recommend/:id" component={Recommend}/>
             		<Route exact path="/book/:id/interest" component={Interest} />
             		<Route exact path="/book/:id" component={Book} />
                    <Route exact path="/allcomment/:id" component={AllComment} />
                    <Route exact path="/commentdetaillist/:id" component={CommentDetailList} />
                    <Route exact path="/search" component={SearchNover} />
                    <Route exact path="/sectionContents/:id/chapter" component={SectionContents} />
                    <Route exact path="/sectionContents/:id/:index" component={ReadContent} />
                    <Route exact path="/gender/:name" component={Gender}/>
                    <Route exact path="/ranklist/:id" component={RankList}/>
                    <Route exact path="/bookcase" component={BookCase}/>
                    <Route exact path="/booklist" component={BookList} />
                    <Route exact path="/booklist/:id" component={BookListDetail} />

                    <Redirect path="*" to="/index/home"/>
             	</Switch>
             </Router>
		)
	}
}

export default RouterMap; 


//<Route exact path="/list"/>   

