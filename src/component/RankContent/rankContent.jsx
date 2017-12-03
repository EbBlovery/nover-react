import React, { Component } from 'react';

import CommendDetail from '../CommendDetail/commendDetail';

import './rankContent.less';

class RankContent extends Component {
	render() {
		const data = this.props.data
		return (
            <div className="rankContent">
            	<ul>
	            	{
	            		data && data.map((item,index)=>{
	            			return (
	            		        <li onClick={this.handleToBooks.bind(this,item._id)} key={index}>
	            		        	<CommendDetail data={item}/>
	            		        </li>
	            			)
	            		})
	            	}
            	</ul>
            </div>
		)
	}
    handleToBooks(id){
    	this.props.history.push('/book/' + id)
    }
}

export default RankContent;