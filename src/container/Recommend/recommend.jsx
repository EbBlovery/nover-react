import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CommendDetail from '../CommendDetail/commendDetail';

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
                            var items = item.book;
                            items.cat = item.majorCate
             				return (
                                <li className="recommend-li" key={index}>
                                	<Link to={{
                                		pathname:"/book/" + item.book._id,
                                        state:{data: item}
                                	}}>
                                		<CommendDetail data={items} />
                                	</Link>
                                	<p className="linear"></p>
                                </li>
             				)
             			})
             		}
             	</ul>
             	<div>
             		<p className="show-more">没有更多书籍</p>
             	</div>
             </div>
		)
	}
}

export default Recommend;