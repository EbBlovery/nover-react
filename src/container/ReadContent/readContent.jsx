import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderBar from '../../component/HeaderBar/headerBar';
import ChapterDetailContent from '../../component/ChapterDetailContent/chapterDetailContent';
import PageReadOption from '../../component/PageReadOption/pageReadOption';
import SectionCatlog from '../../component/SectionCatlog/sectionCatlog';
import ChangeSource from '../../component/ChangeSource/changeSource';

import {getChapterContent,getChapterList,getChangeSourceChapter,getChangeSourceChapterList} from '../../store/action/index';

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
            lastChapter: false, // 是否最后一章                       /*按钮判断*/
            isShowSource: false,                                      /*按钮判断*/
            hideListChapter: [],                                      
            isShowhideListChapter: false                              /*按钮判断*/
		}
	}
	componentDidMount(){
        const {link,title,length} = this.props.location.state;
        if(/zhuishushenqi/g.test(link)){
            this.props.getChapterContent(encodeURIComponent(link))
        }else{
            this.props.getChangeSourceChapter(link)
        }
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
                    handleToPrev = {this.handleToPrev.bind(this)}
                    handleToNext = {this.handleToNext.bind(this)}
                />
                <PageReadOption   // 小说配置选项
                    title={this.state.bookTitle?this.state.bookTitle:''}
                    style={style}
                    handleCloseChapter = {this.handleCloseChapter.bind(this)}
                    handleShowSource = {this.handleShowSource.bind(this)}
                    handleToPrev = {this.handleToPrev.bind(this)}
                    handleToNext = {this.handleToNext.bind(this)}
                    value={this.state.value}                // 判断是否为第一章
                    lastChapter={this.state.lastChapter}    //判断是否为最后一章
                />
        		<SectionCatlog  //  目录
                    chapterlist={this.props.chapterlist?this.props.chapterlist:''}
                    isShowChapter = {this.state.isShowChapter}
                    handleCloseChapter = {this.handleCloseChapter.bind(this)}
                    getClickChapter = {this.getClickChapter.bind(this)}
                />
                <ChangeSource  // 换源部分
                    isShowhideListChapter={this.state.isShowhideListChapter} 
                    isShowSource = {this.state.isShowSource}
                    source = {this.props.source?this.props.source:''}
                    chapterlist = {this.props.chapterlist?this.props.chapterlist:''}
                    getChangeSource = {this.getChangeSource.bind(this)}
                    handleCloseSourceChapter = {this.handleCloseSourceChapter.bind(this)}
                />
            </div>
		)
	}
	handleToPrev (){   // 上一个章节
        var i = Number(this.props.match.params.index) - 1;
        if(!i) return;
        const link = this.props.chapterlist[i-1].link;
        const title = this.props.chapterlist[i-1].title
        this.props.history.replace("/sectionContents/" + this.props.match.params.id +"/" + i,{
            link:link,
            title:title,
            length:this.state.length
        })
        this.setState({isShowBtn: false})
        //this.props.getChapterContent(/zhuishushenqi/g.test(link)?encodeURIComponent(link):link)
        if(/zhuishushenqi/g.test(link)){
            this.props.getChapterContent(encodeURIComponent(link))
        }else{
            this.props.getChangeSourceChapter(link)
        }
	}
    handleToNext() {     // 下一个章节
        var i = 1 + Number(this.props.match.params.index);
        const link = this.props.chapterlist[i-1].link;
        const title = this.props.chapterlist[i-1].title
        this.props.history.replace("/sectionContents/" + this.props.match.params.id +"/" + i,{
            link:link,
            title:title,
            length:this.state.length
        })
        this.setState({isShowBtn: false})
        //this.props.getChapterContent(/zhuishushenqi/g.test(link)?encodeURIComponent(link):link)  这个是错误的
        if(/zhuishushenqi/g.test(link)){
            this.props.getChapterContent(encodeURIComponent(link))
        }else{
            this.props.getChangeSourceChapter(link)
        }

    }
	handleToBookCase() {   // 加书架

	}
	handleToCatalog() {
        this.setState({isShowChapter:true})
	}
	
	handleCloseChapter(){
		this.setState({isShowChapter: !this.state.isShowChapter,isShowBtn:false})
	}
    getClickChapter(link,title,i,len){  // 目录列表点击获取章节
        if((/zhuishushenqi/i).test(link)){
            this.props.getChapterContent(encodeURIComponent(link))
        }else{
            this.props.getChangeSourceChapter(link)
        }
        this.setState({isShowChapter:false});
        this.props.history.replace("/sectionContents/" + this.props.match.params.id +"/" + i,{title: title,length:len,link:link})
    }


    getChangeSource(id){    // 换源大发好   换源之后先显示新章节列表， 等待点击列表后silder全部关闭，在handleCloseSourceChapter方法里边
        this.props.getChangeSourceChapterList(id)
        this.setState({isShowhideListChapter:true})
    }

    handleShowSource(){
        this.setState({isShowSource:true,isShowBtn:false})
    }

    clickCloseSourceBar(){
        this.setState({isShowSource:false})
    }
    handleCloseSourceChapter(link,title,len,index){
        const i = index + 1;
        this.props.history.replace("/sectionContents/" + this.props.match.params.id +"/" + i,{
            link:link,
            title:title,
            length:len
        })
        this.setState({isShowSource:false,isShowhideListChapter:false,isShowChapter:false})
        if(/zhuishushenqi/g.test(link)){
            this.props.getChapterContent(encodeURIComponent(link))
        }else{
            this.props.getChangeSourceChapter(link)
        }
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
        },
        getChangeSourceChapter: (link)=>{
            dispatch(getChangeSourceChapter(link))
        },
        getChangeSourceChapterList: (id) => {
            dispatch(getChangeSourceChapterList(id))
        }
    }
}

export default connect(mapStateToProps,masDispatchToProps)(ReadContent);