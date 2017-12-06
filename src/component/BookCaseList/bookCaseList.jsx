import React, { Component } from 'react';
import './bookCaseList.less';

class BookCaseList extends Component {
	render() {
		const {data} = this.props
		return (
            <div className="bookCaseList">
            	<h4><span>共{data.length}本</span><span>编辑</span></h4>
            	<ul>
            		{
            			data && data.map((item,index)=>{
            				return (
                                <li key={index}>
                                	<img src={'http://statics.zhuishushenqi.com' + item.cover}/>
                                	<div>
                                		<p>{item.title}</p>
                                		<p>阅读到第1章</p>
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

export default BookCaseList;