import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import {getSection, getChapter} from '../../apiconfig/api.js';
import HeaderBar from '../../component/HeaderBar/headerBar';


import './sectionContents.less';

class SectionContents extends Component {
	constructor(props){
		super(props)
		this.state = {
			source: [],  // chapter 章节
            title: '',
            data: [],
            bookTitle:''
		}
	}
	componentDidMount(){
		const {title} = this.props.location.state.title?this.props.location.state:this.props.location.state.data.book;
		const {id} = this.props.match.params
        getChapter(id).then(res=>{
        	getSection(res.data[0]._id).then(rest=>{
	    		this.setState({data:rest.chapters,title:rest.name,source:res.data,bookTitle:title})  // 更新章节列表
	    	})
        })
	}
	// handleGetSource(val){
		
	// }
	// handleSource(){
	// 	this.setState({isshow : !this.state.isshow})
	// }
	render() {
		// var showclass = classNames({
		//  	"changeSource":true,
		//  	"showSource":this.state.isshow
		// })
		var len = this.state.data.length; 
		return (
            <div className="chapter">
                <HeaderBar title={this.state.title} history={this.props.history}/>
                <div className="chapter-content">
                	<div className="chapter-title">
	                    <div>
	                    	<h3>目录</h3>
	                    	<span>共{this.state.data && this.state.data.length || 0 }章</span>
	                    </div>
	                    <span>目录</span>
	                </div>
	                <div className="chapter-list">
	                	<ul>
	                		{
	                			this.state.data && this.state.data.map((item,index)=>{
	                				const chap = index + 1;
	                				const link = encodeURIComponent(item.link);
	                				return (
                                        <li key={index}>
                                        	<Link to={{
                                        		pathname:"/sectionContents/" + this.props.match.params.id + "/" + chap,
                                        		state:{ link:link, title: item.title,length: len,source:this.state.source, bookTitle: this.state.bookTitle, chapterList:this.state.data}
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
            </div>
		)
	}
}

export default SectionContents;

// <div className={showclass}>
//                     <ul>
//                     	{
//                             this.state.source && this.state.source.map((item,index)=>{
//                                 return (
//                                     <li onClick={this.handleGetSource.bind(this,item._id)} key={index}>
//                                     	<p>{item.name}</p>
//                                     </li>
//                                 )
//                             })
//                     	}
//                     </ul>
//                 </div>