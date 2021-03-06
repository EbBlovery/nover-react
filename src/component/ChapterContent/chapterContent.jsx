import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ChapterContent extends Component {
	render() {
		const {data} = this.props;
		return (
            <div className="chapter-content">
            	<div className="chapter-title">
                    <div>
                    	<h3>目录</h3>
                    	<span>共{data && data.length}章</span>
                    </div>
                    <span>目录</span>
                </div>
                <div className="chapter-list">
                	<ul>
                		{
                			data && data.map((item,index)=>{
                				const chap = index + 1;
                				return (
                                    <li key={index}>
                                    	<Link to={{
                                    		pathname:"/sectionContents/" + this.props.match.params.id + "/" + chap,
                                    		state:{ link:item.link, title: item.title, length: data.length}
                                    	}}>
                                            <p>{index+1 || 0}&nbsp; {item.title}</p>
                                    	</Link>
                                    </li>
                				)
                			})
                		}
                	</ul>
                </div>
            </div>
		)
	}
}

export default ChapterContent