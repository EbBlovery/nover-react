import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './bookLove.less';

class BookLove extends Component {
	render() {
		const data = this.props.data.slice(0,4);
		return (
            <div className="interest-book">
            	<p>
            	    <span>你可能感兴趣</span>
            	    <span>
            	        <Link style={{color:'red'}} to={{
            	        	pathname: this.props.pathname + '/interest',
            	        	state: {data:this.props.data,title:'你可能感兴趣'}
            	        }}>更多</Link>
            	    </span>
            	</p>
            	<ul>
            		{
            			data && data.map((items,index)=>{
            				var arr = [];
             				arr.book= items;
            				return (
                                <li key={index}>
                                	<Link key={index} to={{pathname:"/book/" + items._id,
                                               state: {data: arr,id:items._id}
                                    }}>
                                        <img src={items.cover} alt={items.title}/>
                                        <p>{items.title}</p>
                                	</Link>
                                </li>
            				)
            			})
            		}
            	</ul>
            </div>
		)
	}
}

export default BookLove;