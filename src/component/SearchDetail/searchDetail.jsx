import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CommendDetail from '../CommendDetail/commendDetail';


import './searchDetail.less';

class SearchDetail extends Component {
	render() {
		return (
            <div className="searchDetail">
             	<ul className="searchDetail-ul">
             		{
             			this.props.data && this.props.data.map((item,index)=>{
             				const items = {};
             			    items.book = item;
             				return (
                                <li className="searchDetail-li" key={index}>
                                	<Link to={{
                                		pathname:"/book/" + item._id,
                                	}}>
                                		<CommendDetail data={item}/>
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

export default SearchDetail;