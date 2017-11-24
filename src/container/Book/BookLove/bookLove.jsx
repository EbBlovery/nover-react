import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './bookLove.less';

class BookLove extends Component {
	render() {
		const data = this.props.data.slice(0,4);
		console.log(this.props.location)
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
            			data && data.map((item,index)=>{
            				var arr = [];
             				arr.book=item;
            				return (
                                <li key={index}>=
                                	<Link to={{pathname:"/book/" + item._id,
                                               state: {data: arr}   
                                    }}>
                                        <img src={item.cover} alt={item.title}/>
                                        <p>{item.title}</p>
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