import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HeaderBar from '../../component/HeaderBar/headerBar';
import InterestInfo from './InterestInfo/interestInfo';

import './interest.less';

class Interest extends Component {
	render() {
		const {data, title} =this.props.location.state
		return (
            <div className="interest">
                <div>
                     <HeaderBar history={this.props.history} title={title}/>
            	</div>
            	<ul className="interest-ul">
             		{
             			data && data.map((item,index)=>{
             				var arr = [];
             				arr.book=item;
             				return (
                                <li className="interest-li" key={index}>
                                	<Link to={{
                                		pathname:"/book/" + item._id,
                                        state:{data: arr}
                                	}}>
                                		<InterestInfo data={item} />
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

export default Interest;