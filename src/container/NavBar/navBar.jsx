import React, {Component} from 'react';
import { NavLink, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from '../../component/Header/header';
import HomePage from '../HomePage/homePage';
import Footer from '../../component/Footer/footer';
import Classify from '../Classify/classify';
import SectionContents from '../SectionContents/SectionContents';
import Raking from '../Raking/raking';

import './navBar.less';

class NavBar extends Component {
	render() {
        const match = this.props.match
		return (
            <div>
                <Header />
                <div className="navbar">
                	<div><NavLink to={`${match.path}/home`}>首页</NavLink></div>
                	<div><NavLink to={`${match.path}/classify`}>分类</NavLink></div>
                	<div><NavLink to={`${match.path}/ranking`}>排行</NavLink></div>
                	<div><NavLink to={`${match.path}/book`}>书单</NavLink></div>
                	<div><NavLink to={`${match.path}/vip`}>VIP专区</NavLink></div>
                </div>
                <Switch>
                    <Route exact path={`${match.path}/home`} render={() => {
                        return (
                            <div>
                                <div className="mainbody">
                                    <HomePage history={this.props.history}/>
                                </div>
                                <Footer history={this.props.history}/>
                            </div>
                        )
                    }}/>
                    <Route exact path={`${match.path}/classify`} component={Classify}/>
                    <Route exact path={`${match.path}/ranking`} component={Raking}/>

                    <Route path={`${match.path}/book`} render={({match})=>{
                        return (
                            <div>{match.params.id}</div>
                        )
                    }}/>
                    <Route path={`${match.path}/vip`} render={({match})=>{
                        return (
                            <div>{match.params.id}</div>
                        )
                    }}/>
                </Switch>
            </div>
		)
	}
}

export default NavBar;

                

