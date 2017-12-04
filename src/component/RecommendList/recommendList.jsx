import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CommendDetail from '../CommendDetail/commendDetail';


import './recommendList.less';

class RecommendList extends Component {
	render() {
		return (
            <section>
            	<ul className="recommend-ul">
             		{
             			this.props.data && this.props.data.map((item,index)=>{
                            var items = item.book;
             				return (
                                <li className="recommend-li" key={index}>
                                	<Link to={{
                                		pathname:"/book/" + item.book._id
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
            </section>
		)
	}
}

export default RecommendList;