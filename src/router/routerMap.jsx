import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Index from '../component/Index/index';             //  主页 路由；
import Recommend from '../container/Recommend/recommend';  // 首页书籍详细列表
import Book from '../container/Book/book';              //  小说内容信息
import Interest from '../container/Interest/interest';  //  推荐小说全部列表
import AllComment from '../container/AllComment/allComment';    //  小说全部评论
import CommentDetailList from '../container/CommentDetailList/commentDetailList';   // 细节评论；
import SearchNover from '../container/Search/SearchNover/searchNover';
import SectionContents from '../container/SectionContents/SectionContents';


class RouterMap extends Component {
	render() {
		return (
             <Router>
             	<Switch>
                    <Route exact path="/" component={Index}/>
             		<Route exact path="/recommend/:id" component={Recommend}/>
             		<Route exact path="/book/:id/interest" component={Interest} />
             		<Route exact path="/book/:id" component={Book} />
                    <Route exact path="/allcomment/:id" component={AllComment} />
                    <Route exact path="/commentdetaillist/:id" component={CommentDetailList} />
                    <Route exact path="/search" component={SearchNover} />
                    <Route exact path="/sectionContents/:id/chapter" component={SectionContents} />
             	</Switch>
             </Router>
		)
	}
}

export default RouterMap; //<Route exact path="/list"/>

                   // 
