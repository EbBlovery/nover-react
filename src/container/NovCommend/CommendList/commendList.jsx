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
				    	console.log(item)
				        return (
				            <li className="commend-ul-li" key={index}>
				                <Link to={{
				                    pathname:"/book/" + item._id?item._id:'asd',
				                    state:{data:item}
				                }}>
				                    <img src={item.book.cover || '123'}/>
				                    <p>{item.book.title || '123132'}</p>
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
