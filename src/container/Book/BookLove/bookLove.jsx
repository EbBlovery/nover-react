import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './bookLove.less';

class BookLove extends Component {
	render() {
		const data = this.props.data;
		return (
            <div className="interest-book">
            	<p><span>你可能感兴趣</span><span style={{color:'red'}}>更多</span></p>
            	<ul>
            		{
            			data && data.map((item,index)=>{
            				return (
                                <li key={index}>
                                	<Link to="/">
                                        <img src={'http://statics.zhuishushenqi.com' + item.cover}/>
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