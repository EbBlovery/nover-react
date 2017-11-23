import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NoverInfo from '../NovList/NoverInfo/noverInfo';

import HeaderBar from '../../component/HeaderBar/headerBar';

import './recommend.less';

class Recommend extends Component {
	render() {
		var {data,title} = this.props.location.state;
		return (
             <div className="recommend">
             	<div>
             		<HeaderBar history={this.props.history} title={title}/>
             	</div>
             	<ul className="recommend-ul">
             		{
             			data && data.map((item,index)=>{
             				return (
                                <li className="recommend-li" key={index}>
                                	<Link to="/">
                                		<NoverInfo data={item} />
                                	</Link>
                                	<p className="linear"></p>
                                </li>
             				)
             			})
             		}
             	</ul>
             </div>
		)
	}
}

export default Recommend;