import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Index from '../component/Index/index';
import Recommend from '../container/Recommend/recommend';

class RouterMap extends Component {
	render() {
		return (
             <Router>
             	<Switch>
             		<Route exact path="/" component={Index} />

             		<Route path="/recommend/:id" component={Recommend}/>
             	</Switch>
             </Router>
		)
	}
}

export default RouterMap;