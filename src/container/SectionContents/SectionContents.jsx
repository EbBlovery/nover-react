import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {getSection, getChapter} from '../../apiconfig/api.js';
import HeaderBar from '../../component/HeaderBar/headerBar';


import './sectionContents.less';

class SectionContents extends Component {
	constructor(props){
		super(props)
		this.state = {
			spurce: [],  // chapter 章节
            title: ''
		}
	}
	componentDidMount(){
        getChapter(this.props.location.state.id).then(res=>{
        	this.setState({source:res})
        	// return res
        	// getSection(res._id).then(rest=>{
        	// 	this.setState({data:rest.data.data.chapters,title:rest.data.data.name})
        	// })
        })
	}
	render() {
		return (
            <div className="chapter">
                <HeaderBar title={this.state.title} history={this.props.history}/>
                <div className="chapter-content">
                	<div className="chapter-title">
	                    <div>
	                    	<h3>目录</h3>
	                    	<span>共{this.state.data && this.state.data.length}章</span>
	                    </div>
	                    <span>换源</span>
	                </div>
	                <div className="chapter-list">
	                	<ul>
	                		{
	                			// this.state.data && this.state.data.map((item,index)=>{
	                			// 	const chap = index + 1;
	                			// 	const link = encodeURIComponent(item.link);
	                			// 	return (
                    //                     <li key={index}>
                    //                     	<Link to={{
                    //                     		pathname:"/sectionContents/" + this.props.location.state.id + "/" + chap,
                    //                     		state:{ link:link, title: item.title }
                    //                     	}}>
                    //                             <p>{index+1 || 0}&nbsp; {item.title}</p>
                    //                     	</Link>
                    //                     </li>
	                			// 	)
	                			// })
	                		}
	                	</ul>
	                </div>
                </div>
                
            </div>
		)
	}
}

export default SectionContents;

