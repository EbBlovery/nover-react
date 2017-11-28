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
			value: false,
			length: 0,
			bookTitle: '',
			isShowBtn: false
		}
	}
	componentDidMount(){
		if(this.props.match.params.index == 1){
			this.setState({value:true})
		}

		const {link,title,length,source,bookTitle} = this.props.location.state;
		getContent(link).then(res=>{
			//const value = res.body.replace(/\s+/g,'<span style="display: block; height: 5px;"></span>');
			if(res.isVip){
				const vip = ['VIP章节，不给看！'];
				const h = document.documentElement.clientHeight;
				document.getElementById('chapterContent').style.height = h - 16*10 + 'px';
                this.setState({body:vip,contenteIndex: this.props.match.params.index,length: length,title: title,bookTitle:bookTitle})
			}else{
				var arr = res.cpContent.split(/\s+/g);
                this.setState({body:arr,contenteIndex: this.props.match.params.index,length: length,title: title,bookTitle:bookTitle})
			}
		})
	}
	handleClickShowBtn(){
		this.setState({isShowBtn: !this.state.isShowBtn})
	}
	render() {
		var style={display: this.state.isShowBtn?'block':'none',zIndex:1300}
		return (
            <div className="chapterup-detail">
                <HeaderBar title={this.state.title} history={this.props.history}/>
            	<div className="chapter-detail-content">
            		<div onClick={this.handleClickShowBtn.bind(this)} id="chapterContent">
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
        		<div className="pageReadOption" style={style}>
        			<div className="pageOption-Top">
                         <p>{this.state.bookTitle}</p>
        			</div>
        			<div className="pageOption-Bottom">
                         <div className="chapterBtn-top">
                         	<button className={'btn rectangle'}>Aa-</button>
                         	<button className={'btn rectangle'}>Aa+</button>
                         	<button className={'btn ' + 'square'}>月</button>
                         	<button className={'btn ' + 'square'}><span className="item"></span></button>
                         </div>
                         <div className="chapterBtn-bot">
                         	<button className={'btn btn-rectangle'}>上一章</button>
                         	<button className={'btn btn-rectangle'}>下一章</button>
                         </div>
        			</div>
        		</div>
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