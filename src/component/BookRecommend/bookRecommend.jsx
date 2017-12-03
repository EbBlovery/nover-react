import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './bookRecommend.less';

class BookRecommend extends Component {
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
            				return (
                                <li onClick={this.handleChangeBookDetail.bind(this,items._id)} key={index}>
                                    <img src={items.cover} alt={items.title}/>
                                    <p>{items.title}</p>
                                </li>
            				)
            			})
            		}
            	</ul>
            </div>
		)
	}
    handleChangeBookDetail(id){
        const {changeBookDetail} = this.props;
        changeBookDetail(id)
    }
}

export default BookRecommend;