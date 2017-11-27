import React, {Component} from 'react';
import { NavLink, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/header';
import Content from '../../component/Content/content';
import Footer from '../../component/Footer/footer';

import SectionContents from '../SectionContents/SectionContents';

import './navBar.less';

class NavBar extends Component {
	render() {
        const match = this.props.match
        console.log(match)
		return (
            <div>
                <Header />
                <div className="navbar">
                	<div><NavLink to={`${match.path}/home`}>首页</NavLink></div>
                	<div><NavLink to={`${match.path}/list`}>分类</NavLink></div>
                	<div><NavLink to={`${match.path}/rank`}>排行</NavLink></div>
                	<div><NavLink to={`${match.path}/book`}>书单</NavLink></div>
                	<div><NavLink to={`${match.path}/vip`}>VIP专区</NavLink></div>
                </div>
                <Switch>
                    
                    <Route exact path={`${match.path}/home`} render={() => {
                        return (
                            <div>
                                <div className="mainbody">
                                    <Content history={this.props.history}/>
                                </div>
                                <Footer history={this.props.history}/>
                            </div>
                        )
                    }}/>
                    <Route path={`${match.path}/list`} render={({match})=>{
                        return (
                            <div>dsafdasfafasfas</div>
                        )
                    }}/>
                    <Route path={`${match.path}/rank`} render={({match})=>{
                        return (
                            <div>asfjkahnsfkanasjdnkanf</div>
                        )
                    }}/>
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

                

