import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Index from '../component/Index/index';

class RouterMap extends Component {
	render() {
		return (
             <Router>
             	<Switch>
             		<Route path="/" component={Index} />
             	</Switch>
             </Router>
		)
	}
}

export default RouterMap;