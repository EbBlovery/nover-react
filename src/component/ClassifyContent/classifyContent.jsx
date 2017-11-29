import React, { Component } from 'react';

import './classifyContent.less';

class ClassifyContent extends Component {
	render() {
		const {data} = this.props;
		console.log(data)
		return (
            <div className="list-section">
                <article>{this.props.title}</article>
                <ul className="classify-ul">
            	{
            		data && data.map((item,index)=>{
            			return (
                            <li className="classify-li" key={index}>
                                <div className="classify-content">
                                	<span>{item.name}</span>
                                	<span>{item.bookCount}</span>
                                </div>
                            </li>
            			)
            		})
            	}
            	</ul>
            </div>
		)
	}
}

export default ClassifyContent;