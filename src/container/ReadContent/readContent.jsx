import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderBar from '../../component/HeaderBar/headerBar';
import ChapterDetailContent from '../../component/ChapterDetailContent/chapterDetailContent';
import PageReadOption from '../../component/PageReadOption/pageReadOption';
import SectionCatlog from '../../component/SectionCatlog/sectionCatlog';

import {getContent, getSection} from '../../apiconfig/api';
import {getChapterContent,getChapterList} from '../../store/action/index';

import './readContent.less';

class ReadContent extends Component {
	constructor(props){
		super(props)
		this.state = {
			title: '',  //  章节标题
			body:[],    //  正文

			contenteIndex: 1,  // 章节下标  
			value: false,   // 是否是第一章                           /*按钮判断*/
			length: 0,    // 章节长度                                 /*按钮判断*/
			bookTitle: '',  // 小说标题
			isShowBtn: false,   //  是否展示文字控制栏目,             /*按钮判断*/
			isShowChapter: false,                                     /*按钮判断*/
			chapterList: [], 
            lastChapter: false, // 是否最后一章                       /*按钮判断*/
            source: [],
            isShowSource: false,                                      /*按钮判断*/
            hideListChapter: [],                                      /*按钮判断*/
            isShowhideListChapter: false                              /*按钮判断*/
		}
	}
	componentDidMount(){
        const {link,title,length} = this.props.location.state;

        this.props.getChapterContent(/zhuishushenqi/g.test(link)?encodeURIComponent(link):link)
        this.props.getChapterList(this.props.match.params.id)
		if(Number(this.props.match.params.index) === 1){
			this.setState({value:true})
		}else{
            this.setState({value:false})
        }
		if(Number(this.props.match.params.index) === length){
			this.setState({length:length,lastChapter:true})
		}else{
            this.setState({length:length,lastChapter:false})
        }
        this.setState({title: title})
	}
    componentWillReceiveProps(){
        const index = this.props.history.location.pathname.split('/')[3];
        const {length,title} = this.props.location.state;
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
        this.setState({title:title})
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

                <ChapterDetailContent    // 正文内容
                    handleClickShowBtn={this.handleClickShowBtn.bind(this)} 
                    body={this.props.body?this.props.body:''} 
                    value={this.state.value} 
                    lastChapter={this.state.lastChapter}
                    handleCloseChapter = {this.handleCloseChapter.bind(this)}
                />
                <PageReadOption   // 小说配置选项
                    title={this.state.bookTitle?this.state.bookTitle:''} 
                    style={style} 
                    value={this.state.value} 
                    lastChapter={this.state.lastChapter}
                    handleCloseChapter = {this.handleCloseChapter.bind(this)}
                />

        		<SectionCatlog  //  目录
                    chapterlist={this.props.chapterlist?this.props.chapterlist:''}
                    isShowChapter = {this.state.isShowChapter}
                    handleCloseChapter = {this.handleCloseChapter.bind(this)}
                    getClickChapter = {this.getClickChapter.bind(this)}
                />

                <section style={{transform:this.state.isShowSource?'translateY(0)':'translateY(100%)'}} className="changeSource">
                    <p className="source-header" key="laiyuan"><span onClick={this.clickCloseSourceBar.bind(this)}>×</span> 选择来源</p>
                    <ul className="source-ul">
                        {
                            this.props.source && this.props.source.map((item,index)=>{
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
    getClickChapter(link,title,i,len){
        if((/zhuishushenqi/i).test(link)){
            this.props.getChapterContent(encodeURIComponent(link))
        }else{
            // getContent(encodeURIComponent(link)).then(res=>{
            //     //const value = res.body.replace(/\s+/g,'<span style="display: block; height: 5px;"></span>');
            //     if(res.isVip){
            //         const vip = ['VIP章节，不给看！'];
            //         const h = document.documentElement.clientHeight;
            //         document.getElementById('chapterContent').style.height = h - 16*10 + 'px';
            //         this.setState({body:vip,contenteIndex: this.props.match.params.index,title: title,bookTitle:bookTitle, chapterList: chapterList,source:source})
            //     }else{
            //         var arr = res.body.split(/\s+/g);
            //         this.setState({body:arr,contenteIndex: this.props.match.params.index,title: title,bookTitle:bookTitle, chapterList: chapterList,source:source})
            //     }
            // })
        }






        this.setState({isShowChapter:false});
        this.props.history.replace("/sectionContents/" + this.props.match.params.id +"/" + i,{title: title,length:len,link:link})
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

function mapStateToProps(state){
    console.log(state)
    return {
        body: state.chapter.body,
        source: state.chapter.source,
        chapterlist: state.chapter.chapterlist
    }
}

function masDispatchToProps(dispatch){
    return {
        getChapterContent: (link) => {
            dispatch(getChapterContent(link))
        },
        getChapterList: (id)=>{
            dispatch(getChapterList(id))
        }
    }
}

export default connect(mapStateToProps,masDispatchToProps)(ReadContent);