import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './commendList.less';

class CommendList extends Component {
	render() {
		var data = this.props.data;
		return (
			<ul className="commend-ul">
				{
				    data && data.map((item,index)=>{
				        return (
				            <li className="commend-ul-li" key={index}>
				                <Link to={{
				                    pathname:"/book/" + item.book._id
				                }}>
				                    <img src={item.book.cover}/>
				                    <p>{item.book.title}</p>
				                </Link>
				            </li>
				        )
				    })
				}
			</ul>
        )
	}
}

export default CommendList;
