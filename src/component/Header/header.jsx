import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.less';

class Header extends Component {
     render(){
     	 return (
             <div className="Header">
             	 <div><Link to="/"><img src={require("../../assets/logo.png")} alt="logo"/></Link></div>
             	 <div><img src={require("../../assets/boospra.png")} alt="boospra"/></div>
             	 <div><img src={require("../../assets/user.png")} alt="user"/></div>
             </div>
     	 )
     }
}

export default Header;