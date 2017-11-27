import React, { Component } from 'react';

import HeaderBar from '../../component/HeaderBar/headerBar';

import {getContent} from '../../apiconfig/api';


class ReadContent extends Component {
	constructor(props){
		super(props)
		this.state = {
			title: '',
			body:''
		}
	}
	componentDidMount(){
		const {link} = this.props.location.state;
		getContent(link).then(res=>{
			const value = res.body.replace(/\s+/g,'<span style="display: block; height: 5px;"></span>');
			document.getElementById('chapterContent').innerHTML = value
		})
	}
	render() {
		return (
            <div>
                <HeaderBar title={this.props.location.state.title} history={this.props.history}/>
            	<div>
            		<p id="chapterContent"></p>
            	</div>
            </div>
		)
	}
}

export default ReadContent;