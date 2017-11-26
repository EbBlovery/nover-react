import React, {Component} from 'react';
import { NavLink, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/header';
import Content from '../../component/Content/content';
import Footer from '../../component/Footer/footer';

import SectionContents from '../SectionContents/SectionContents';

import './navBar.less';

class NavBar extends Component {
	render() {
        const url = this.props.match.url
		return (
            <div>
                <Header />
                <div className="navbar">
                	<div><NavLink to={`${url}`}>首页</NavLink></div>
                	<div><NavLink to={`${url}list`}>分类</NavLink></div>
                	<div><NavLink to={`${url}rank`}>排行</NavLink></div>
                	<div><NavLink to={`${url}book`}>书单</NavLink></div>
                	<div><NavLink to={`${url}vip`}>VIP专区</NavLink></div>
                </div>
                <Route exact path={`${url}/list`} component={SectionContents}/>
                <Route exact path={url} render={() => {
                    return (
                        <div >
                            <div className="mainbody">
                                <Content history={this.props.history}/>
                            </div>
                            <Footer history={this.props.history}/>
                        </div>
                    )
                }}/>
            </div>
		)
	}
}

export default NavBar;

                

