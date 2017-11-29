import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HeaderBar from '../../component/HeaderBar/headerBar';


import {getContent, getSection} from '../../apiconfig/api';

import './readContent.less';

class ReadContent extends Component {
	constructor(props){
		super(props)
		this.state = {
			title: '',  //  章节标题
			body:[],    //  正文
			contenteIndex: 1,  // 章节下标
			value: false,   // 是否是第一章
			length: 0,    // 章节长度
			bookTitle: '',  // 小说标题
			isShowBtn: false,   //  是否展示文字控制栏目,
			isShowChapter: false,
			chapterList: [],
            lastChapter: false, // 是否最后一章
            source: [],
            isShowSource: false,
            hideListChapter: [],
            isShowhideListChapter: false
		}
	}
	componentDidMount(){
		if(Number(this.props.match.params.index) === 1){
			this.setState({value:true})
		}else{
            this.setState({value:false})
        }
		const {link,title,length,source,bookTitle,chapterList} = this.props.location.state;
		if(Number(this.props.match.params.index) === length){
			this.setState({length:length,lastChapter:true})
		}else{
            this.setState({length:length,lastChapter:false})
        }
		getContent(link).then(res=>{
			//const value = res.body.replace(/\s+/g,'<span style="display: block; height: 5px;"></span>');
			if(res.isVip){
				const vip = ['VIP章节，不给看！'];
				const h = document.documentElement.clientHeight;
				document.getElementById('chapterContent').style.height = h - 16*10 + 'px';
                this.setState({body:vip,contenteIndex: this.props.match.params.index,title: title,bookTitle:bookTitle, chapterList: chapterList,source:source})
			}else{
				var arr = res.cpContent.split(/\s+/g);
                this.setState({body:arr,contenteIndex: this.props.match.params.index,title: title,bookTitle:bookTitle, chapterList: chapterList,source:source})
			}
		})
	}
    componentWillReceiveProps(){
        const {link,title,length,source,bookTitle,chapterList} = this.props.history.location.state;
        const index = this.props.history.location.pathname.split('/')[3];
        if(Number(index) === 1){
            this.setState({value:true})
        }else{
            this.setState({value:false})
        }

        if(Number(index) == length){
            this.setState({length:length,lastChapter:true})
        }else{
            this.setState({length:length,lastChapter:false})
        }
        if((/zhuishushenqi/i).test(link)){
            getContent(link).then(res=>{
                //const value = res.body.replace(/\s+/g,'<span style="display: block; height: 5px;"></span>');
                if(res.isVip){
                    const vip = ['VIP章节，不给看！'];
                    const h = document.documentElement.clientHeight;
                    document.getElementById('chapterContent').style.height = h - 16*10 + 'px';
                    this.setState({body:vip,contenteIndex: this.props.match.params.index,title: title,bookTitle:bookTitle, chapterList: chapterList,source:source})
                }else{
                    var arr = res.cpContent.split(/\s+/g);
                    this.setState({body:arr,contenteIndex: this.props.match.params.index,title: title,bookTitle:bookTitle, chapterList: chapterList,source:source})
                }
            })
        }else{
            getContent(encodeURIComponent(link)).then(res=>{
                //const value = res.body.replace(/\s+/g,'<span style="display: block; height: 5px;"></span>');
                if(res.isVip){
                    const vip = ['VIP章节，不给看！'];
                    const h = document.documentElement.clientHeight;
                    document.getElementById('chapterContent').style.height = h - 16*10 + 'px';
                    this.setState({body:vip,contenteIndex: this.props.match.params.index,title: title,bookTitle:bookTitle, chapterList: chapterList,source:source})
                }else{
                    var arr = res.body.split(/\s+/g);
                    this.setState({body:arr,contenteIndex: this.props.match.params.index,title: title,bookTitle:bookTitle, chapterList: chapterList,source:source})
                }
            })
        }
        
        console.log(this.props.history.location.state)
    }
    shouldComponentUpdate(){
        return true
    }
	handleClickShowBtn(){
		this.setState({isShowBtn: !this.state.isShowBtn})
	}
	render() {
		var style={display: this.state.isShowBtn?'block':'none',zIndex:200}
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
        			<button onClick={this.handleToNext.bind(this)}  className={this.state.lastChapter?"disabled":''} disabled={this.state.lastChapter}>下一章</button>
        		</footer>
        		<div className="pageReadOption" style={style}>
        			<div className="pageOption-Top">
                         <p>{this.state.bookTitle}<span onClick={this.handleShowSource.bind(this)} className="boochangesource">换源</span></p>
        			</div>
        			<div className="pageOption-Bottom">
                         <div className="chapterBtn-top">
                         	<button disabled={this.state.value} className={'btn rectangle'}>Aa-</button>
                         	<button className={'btn rectangle'}>Aa+</button>
                         	<button className={'btn ' + 'square'}>月</button>
                         	<button onClick={this.handleCloseChapter.bind(this)} className={'btn ' + 'square'}><span className="item"></span></button>
                         </div>
                         <div className="chapterBtn-bot">
                         	<button onClick={this.handleToPrev.bind(this)} className={'btn btn-rectangle'} disabled={this.state.value}>上一章</button>
                         	<button onClick={this.handleToNext.bind(this)} className={'btn btn-rectangle'} disabled={this.state.lastChapter}>下一章</button>
                         </div>
        			</div>
        		</div>
        		<section style={{transform:this.state.isShowChapter?'translateX(0)':'translateX(-100%)'}} className="section-list">
        		    <p className="section-catalog">目录</p>  
        			<ul className="section-ul">
        			    {
        			    	// 此栏目为目录
                            this.state.chapterList && this.state.chapterList.map((item,index)=>{
                                const i = index + 1;
                            	return (
                            		<li onClick={this.getClickChapter.bind(this)} key={index}>
                                        <Link replace to={{
                                            pathname: "/sectionContents/" + this.props.match.params.id +"/" + i,
                                            state: {
                                                link:item.link,
                                                title:item.title,
                                                length:this.state.length,
                                                source:this.state.source,
                                                bookTitle:this.state.bookTitle,
                                                chapterList:this.state.chapterList
                                            }
                                        }}>
                        	                 <p>{index+1 || 0} {item.title}</p>
                                        </Link>
                        	       </li>
                            	)
                            })
        			    }
        			</ul>
        			<p onClick={this.handleCloseChapter.bind(this)} className="section-close">close</p>
        		</section>
                <section style={{transform:this.state.isShowSource?'translateY(0)':'translateY(100%)'}} className="changeSource">
                    <p className="source-header" key="laiyuan"><span onClick={this.clickCloseSourceBar.bind(this)}>×</span> 选择来源</p>
                    <ul className="source-ul">
                        {
                            this.state.source && this.state.source.map((item,index)=>{
                                return (
                                    <li onClick={this.getChangeSource.bind(this,item._id)} key={index}>
                                        <span className="source-logo">{item.host.charAt(0).toUpperCase()}</span>
                                        <p className="source-info">
                                            <span>{item.host}</span>
                                            <span>{item.lastChapter}</span>
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="hide-list-chapter" style={{transform:this.state.isShowhideListChapter?'translateX(0)':'translateX(100%)'}}>
                        <ul className="hide-ul">
                            {
                                this.state.hideListChapter && this.state.hideListChapter.map((item,index)=>{
                                    return (
                                        <li onClick={this.handleCloseSourceChapter.bind(this,item.link,index)} key={index}>
                                            {item.title}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    
                </section>
            </div>
		)
	}
	handleToPrev (){
        var i = Number(this.props.match.params.index) - 1;
        this.props.history.replace("/sectionContents/" + this.props.match.params.id +"/" + i,{
            link:this.state.chapterList[i-1].link,
            title:this.state.chapterList[i-1].title,
            length:this.state.length,
            source:this.state.source,
            bookTitle:this.state.bookTitle,
            chapterList:this.state.chapterList
        })
        this.setState({isShowBtn: false})
	}
    handleToNext() {
        var i = 1 + Number(this.props.match.params.index);
        this.props.history.replace("/sectionContents/" + this.props.match.params.id +"/" + i,{
            link:this.state.chapterList[i-1].link,
            title:this.state.chapterList[i-1].title,
            length:this.state.length,
            source:this.state.source,
            bookTitle:this.state.bookTitle,
            chapterList:this.state.chapterList
        })
        this.setState({isShowBtn: false})
    }
	handleToBookCase() {   // 加书架

	}
	handleToCatalog() {
        this.setState({isShowChapter:true})
	}
	
	handleCloseChapter(){
		this.setState({isShowChapter: !this.state.isShowChapter,isShowBtn:false})
	}
    getClickChapter(){
        this.setState({isShowChapter:false})
    }


    getChangeSource(id){    // 换源大发好
        getSection(id).then(res=>{
            this.setState({hideListChapter:res.chapters,isShowhideListChapter:true})
            console.log(res)
        })
    }

    handleShowSource(){
        this.setState({isShowSource:true,isShowBtn:false})
    }

    clickCloseSourceBar(){
        this.setState({isShowSource:false})
    }
    handleCloseSourceChapter(link,index){
        const i = index + 1;
        this.props.history.replace("/sectionContents/" + this.props.match.params.id +"/" + i,{
            link:this.state.chapterList[index].link,
            title:this.state.chapterList[index].title,
            length:this.state.hideListChapter.length,
            source:this.state.source,
            bookTitle:this.state.bookTitle,
            chapterList:this.state.hideListChapter
        })
        this.setState({isShowSource:false,isShowhideListChapter:false,isShowChapter:false})
    }
}

export default ReadContent;