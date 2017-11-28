import React, { Component } from 'react';

import HeaderBar from '../../component/HeaderBar/headerBar';

import {getContent} from '../../apiconfig/api';

import './readContent.less';

class ReadContent extends Component {
	constructor(props){
		super(props)
		this.state = {
			title: '',
			body:[],
			contenteIndex: 1,
			value: false
		}
	}
	componentDidMount(){
		if(this.props.match.params.index == 1){
			this.setState({value:true})
		}
		const {link} = this.props.location.state;
		getContent(link).then(res=>{
			//const value = res.body.replace(/\s+/g,'<span style="display: block; height: 5px;"></span>');
            var arr = res.body.split(/\s+/g);
            this.setState({body: arr,contenteIndex: this.props.match.params.index})
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
            	<footer className="content-button">
        			<button onClick={this.handleToPrev.bind(this)} className={this.state.value?"disabled":''} disabled={this.state.value}>上一章</button>
        			<button onClick={this.handleToBookCase.bind(this)}>加书架</button>
        			<button onClick={this.handleToCatalog.bind(this)}>目录</button>
        			<button onClick={this.handleToNext.bind(this)}>下一章</button>
        		</footer>
            </div>
		)
	}
	handleToPrev (){
        console.log(this.props)
	}
	handleToBookCase() {
        console.log(this.props)
	}
	handleToCatalog() {
        console.log(123)
	}
	handleToNext() {
        console.log(123)
	}
}

export default ReadContent;