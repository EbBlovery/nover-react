import React, { Component } from 'react';

import HeaderBar from '../../component/HeaderBar/headerBar';

import {getContent} from '../../apiconfig/api';

import './readContent.less';

class ReadContent extends Component {
	constructor(props){
		super(props)
		this.state = {
			title: '',  //  章节标题
			body:[],    //  正文
			contenteIndex: 1,  // 章节下标
			value: false,   // 是否是第一章
			length: false,    // 章节长度
			bookTitle: '',  // 小说标题
			isShowBtn: false,   //  是否展示文字控制栏目,
			isShowChapter: false,
			chapterList: []
		}
	}
	componentDidMount(){
		if(this.props.match.params.index === 1){
			this.setState({value:true})
		}
		

		const {link,title,length,source,bookTitle,chapterList} = this.props.location.state;
		if(this.props.match.params.index == length){
			console.log(length)
			this.setState({length:true})
		}
		getContent(link).then(res=>{
			//const value = res.body.replace(/\s+/g,'<span style="display: block; height: 5px;"></span>');
			if(res.isVip){
				const vip = ['VIP章节，不给看！'];
				const h = document.documentElement.clientHeight;
				document.getElementById('chapterContent').style.height = h - 16*10 + 'px';
                this.setState({body:vip,contenteIndex: this.props.match.params.index,title: title,bookTitle:bookTitle, chapterList: chapterList})
			}else{
				var arr = res.cpContent.split(/\s+/g);
                this.setState({body:arr,contenteIndex: this.props.match.params.index,title: title,bookTitle:bookTitle, chapterList: chapterList})
			}
		})
	}
	handleClickShowBtn(){
		this.setState({isShowBtn: !this.state.isShowBtn})
	}
	render() {
		var style={display: this.state.isShowBtn?'block':'none'}
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
        			<button onClick={this.handleToNext.bind(this)}  className={this.state.length?"disabled":''} disabled={this.state.length}>下一章</button>
        		</footer>
        		<div className="pageReadOption" style={style}>
        			<div className="pageOption-Top">
                         <p>{this.state.bookTitle}</p>
        			</div>
        			<div className="pageOption-Bottom">
                         <div className="chapterBtn-top">
                         	<button disabled={this.state.value} className={'btn rectangle'}>Aa-</button>
                         	<button className={'btn rectangle'}>Aa+</button>
                         	<button className={'btn ' + 'square'}>月</button>
                         	<button onClick={this.handleCloseChapter.bind(this)} className={'btn ' + 'square'}><span className="item"></span></button>
                         </div>
                         <div className="chapterBtn-bot">
                         	<button className={'btn btn-rectangle'}>上一章</button>
                         	<button className={'btn btn-rectangle'}>下一章</button>
                         </div>
        			</div>
        		</div>
        		<section style={{transform:this.state.isShowChapter?'translateX(0)':'translateX(-100%)'}} className="section-list">
        		    <p className="section-catalog">目录</p>  
        			<ul className="section-ul">
        			    {
        			    	// 此栏目为目录
                            this.state.chapterList && this.state.chapterList.map((item,index)=>{
                            	return (
                            		<li>
                        	            <p>{index+1 || 0} {item.title}</p>
                        	       </li>
                            	)
                            })
        			    }
        			</ul>
        			<p onClick={this.handleCloseChapter.bind(this)} className="section-close">close</p>
        		</section>
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
	handleCloseChapter(){
		this.setState({isShowChapter: !this.state.isShowChapter,isShowBtn:false})
	}
}

export default ReadContent;