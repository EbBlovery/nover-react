import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Index from '../component/Index/index';             //  主页 路由；
import Recommend from '../container/Recommend/recommend';  // 首页书籍详细列表
import Book from '../container/Book/book';              //  小说内容信息
import Interest from '../container/Interest/interest';  //  推荐小说全部列表
import Comment from '../container/Comment/comment';    //  小说全部评论

class RouterMap extends Component {
	render() {
		return (
             <Router>
             	<Switch>
             		<Route exact path="/" component={Index} />

             		<Route path="/recommend/:id" component={Recommend}/>
             		<Route path="/book/:id/interest" component={Interest} />
             		<Route path="/book/:id" component={Book} />
                    <Route path="/comment/:id" component={Comment} />
             	</Switch>
             </Router>
		)
	}
}

export default RouterMap;