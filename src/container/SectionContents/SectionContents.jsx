import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {getSection, getChapter} from '../../apiconfig/api.js';
import HeaderBar from '../../component/HeaderBar/headerBar';


import './sectionContents.less';

class SectionContents extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: []  // chapter 章节
		}
	}
	componentDidMount(){
        getChapter(this.props.location.state.id).then(res=>{
        	// return res
        	getSection(res._id).then(rest=>{
        		this.setState({data:rest.data.data.chapters})
        	})
        })
	}
	render() {
	    console.log(this.state.data)

		return (
            <div className="chapter">
                <HeaderBar title="隐藏书源不给看" history={this.props.history}/>
                <div className="chapter-content">
                	<div className="chapter-title">
	                    <div>
	                    	<h3>目录</h3>
	                    	<span>共{this.state.data && this.state.data.length}章</span>
	                    </div>
	                    <span>倒序</span>
	                </div>
	                <div className="chapter-list">
	                	<ul>
	                		{
	                			this.state.data && this.state.data.map((item,index)=>{
	                				return (
                                        <li key={index}>
                                        	<Link to="/">
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