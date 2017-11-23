import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './headerBar.less';

class HeaderBar extends Component {
	 constructor(props){
	 	super(props)
	 }
	 goToBack(){
	 	this.props.history.go(-1)
	 }
     render(){
     	 return (
             <div className="headerBar">
             	 <div onClick={this.goToBack.bind(this)}><span><img src={require('../../assets/back.svg')} alt="back"/></span>返回</div>
             	 <div>{this.props.title}</div>
             	 <div><Link to="/"><img src={require("../../assets/home-page.svg")} alt="homepage"/></Link></div>
             </div>
     	 )
     }
}

export default HeaderBar;