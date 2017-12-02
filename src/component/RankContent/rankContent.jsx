import React, { Component } from 'react';

import CommendDetail from '../../container/CommendDetail/commendDetail';


class RankContent extends Component {
	render() {
		const data = this.props.data
		return (
            <div>
            	<ul>
	            	{
	            		data && data.map((item,index)=>{
	            			return (
	            		        <li>
	            		        	<CommendDetail data={item}/>
	            		        </li>
	            			)
	            		})
	            	}
            	</ul>
            </div>
		)
	}
}

export default RankContent;