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
            isshow: false
		}
	}
	componentDidMount(){
		const id = this.props.location.state.id?this.props.location.state.id:this.props.location.state.data.book._id;
        getChapter(id).then(res=>{
        	this.setState({source:res.data})
        	// return res
        	
        })
	}
	handleGetSource(val){
		getSection(val).then(rest=>{
    		this.setState({data:rest.data.data.chapters,title:rest.data.data.name,isshow : !this.state.isshow})
    	})
	}
	handleSource(){
		this.setState({isshow : !this.state.isshow})
	}
	render() {
		var showclass = classNames({
		 	"changeSource":true,
		 	"showSource":this.state.isshow
		})
		return (
            <div className="chapter">
                <HeaderBar title={this.state.title} history={this.props.history}/>
                <div className="chapter-content">
                	<div className="chapter-title">
	                    <div>
	                    	<h3>目录</h3>
	                    	<span>共{this.state.data && this.state.data.length || 0 }章</span>
	                    </div>
	                    <span onClick={this.handleSource.bind(this)}>换源</span>
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
                                        		pathname:"/sectionContents/" + this.props.location.state.id + "/" + chap,
                                        		state:{ link:link, title: item.title }
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
                <div className={showclass}>
                    <ul>
                    	{
                            this.state.source && this.state.source.map((item,index)=>{
                                return (
                                    <li onClick={this.handleGetSource.bind(this,item._id)} key={index}>
                                    	<p>{item.name}</p>
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

export default SectionContents;

