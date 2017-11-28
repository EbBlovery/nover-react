import React, { Component } from 'react';

import HeaderBar from '../../component/HeaderBar/headerBar';

import {getContent} from '../../apiconfig/api';

import './readContent.less';

class ReadContent extends Component {
	constructor(props){
		super(props)
		this.state = {
			title: '',
			body:[]
		}
	}
	componentDidMount(){
		const {link} = this.props.location.state;
		getContent(link).then(res=>{
			//const value = res.body.replace(/\s+/g,'<span style="display: block; height: 5px;"></span>');
            var arr = res.body.split(/\s+/g);
            this.setState({body: arr})
			//document.getElementById('chapterContent').innerHTML = value
		})
	}
	render() {
		return (
            <div className="chapterup-detail">
                <HeaderBar title={this.props.location.state.title} history={this.props.history}/>
            	<div className="chapter-detail-content">
            		<div id="chapterContent">
                        {
                        	this.state.body && this.state.body.map((item,index)=>{
                        		return <p key={index}>{item}</p>
                        	})
                        }
            		</div>
            	</div>
            </div>
		)
	}
}

export default ReadContent;