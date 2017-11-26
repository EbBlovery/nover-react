import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { getRecommend, getComment, getBook } from '../../apiconfig/api.js';

import HeaderBar from '../../component/HeaderBar/headerBar';
import Footer from '../../component/Footer/footer'
import Comment from './Comment/comment';       //  小说评论 此处只取两个；
import BookLove from './BookLove/bookLove';    //  类似小说推荐列表
// import SectionContents from '../component/SectionContents/sectionContents';

import {tab} from '../../util/util.js';


import './book.less';

class Book extends Component {
	constructor(props){
         super(props)
         this.state = {isShow: false, //  短介绍 是否展示
         	           val:[],        //  评论
         	           recommend: [],  // 可能喜欢的书籍
                       bookiInfo: []   // 书籍详细信息
         	        }
	}
	handleClick(){
        this.setState({isShow:!this.state.isShow})
	}
    componentWillMount(){
        console.log(1,this.props.location)

    }
	componentDidMount(){
        console.log(1,this.props.location)
        // console.log()
        var id =this.props.location.state.id?this.props.location.state.id:this.props.location.state.data.book._id;
        getBook(id).then(res=>{
            this.setState({bookiInfo:res.data})
        })
		getRecommend(id).then(res=>{  // 推荐列表
			this.setState({recommend:res})
		})
		getComment(id).then(res=>{  //评论
            this.setState({val:res})
		})
	}
    componentWillReceiveProps(){
        console.log(2,this.props.history)
           // console.log(this.props.history.location.state)
        getBook(this.props.history.location.state.id).then(res=>{
            // console.log(res.data)
            this.setState({bookiInfo:res.data})
        })
        getComment(this.props.history.location.state.id).then(res=>{ // 整老子好久的bug 老子记住你了  this.props.history.location.state.id ！== this.props.location.state.id
			this.setState({val:res})
		})
		getRecommend(this.props.history.location.state.id).then(res=>{
            this.setState({recommend:res})
		})
    }
    shouldComponentUpdate(a,b){         // 一直返回true 只要数据变更就重新render； 变更糟 componentWillReceiveProps 里边
    	return true;
        // if(a!==b){
        //        return true
        // }
        // return false;
        
    }
    // componentWillUpdate(){
    // 	console.log('componentWillUpdate')
    // }
    // componentDidUpdate(){
    // 	console.log('componentWillUpdate')
    // }
    // componentWillUnmount(){
    // 	console.log(7)
    // }


	render() {
		// const {data} = this.props.location.state
		// var wordCount = data.book.wordCount>=10000?Math.round((data.book.wordCount)/10000) + "万":data.book.wordCount
        var wordCount = this.state.bookiInfo.wordCount>=10000?Math.round((this.state.bookiInfo.wordCount)/10000) + "万":this.state.bookiInfo.wordCount
		var info = this.state.val.reviews?this.state.val.reviews.slice(0,2):''
        var updated = tab((new Date(this.state.bookiInfo.updated)).toLocaleDateString().split('/').join('-'));
		return (
            <div className="book">
            	<HeaderBar title="书籍详情" history={this.props.history} />
            	<div className="book-info">
            		<div className="book-info-content">
            			<div className="book-top">
            				<div>
            					<img src={this.state.bookiInfo.cover} alt={this.state.bookiInfo.title}/>
            				</div>
            				<div>
            					<p>{this.state.bookiInfo.title}</p>
            					<p><span>{this.state.bookiInfo.author}</span>&nbsp;&nbsp; | &nbsp;&nbsp;{this.state.bookiInfo.minorCate || this.state.bookiInfo.majorCate}&nbsp;&nbsp; |&nbsp;&nbsp; {wordCount}字</p>
            					<p>{updated}</p>
            				</div>
            			</div>
            			<div className="book-bot">
            				<span>加入书架</span>
            				<span>开始阅读</span>
            			</div>
            		</div>
            		<p className="linear"></p>
            		<div className="book-person">
            			<p>
            				<span>追人气</span>
            				<span className="item">{this.state.bookiInfo.latelyFollower}</span>
            			</p>
            			<p>
            				<span>读者留存率</span>
            				<span className="item">{this.state.bookiInfo.retentionRatio}%</span>
            			</p>
            			<p>
            				<span>日更字数/天</span>
            				<span className="item">{this.state.bookiInfo.serializeWordCount || 0}</span>
            			</p>
            		</div>
            		<p className="linear"></p>
            		<div className="longIntro">
                       <p className={this.state.isShow?'actives':''}>{this.state.bookiInfo.longIntro}</p>
                       <img className={this.state.isShow?'circle':''} onClick={this.handleClick.bind(this)} src={require('../../assets/arrowdown.svg')} />
            		</div>
            		<p className="linear"></p>
            		
            	</div>
                <div className="section-list">
                    <p>
                        <span>目录</span>
                        <span>{this.state.bookiInfo.lastChapter}</span>
                    </p>
                </div>
               <p className="linear"></p>
            	<div className="hot-comment">
        		    <div className="comment-header">
	                    <span>
	                    	热门书评
	                    </span>
	                    <span>
	                    	<Link to={{
                                // this.props.location.state.data.book._id
	                    		pathname:"/allcomment/" + this.state.bookiInfo._id,
                                state: {comment:this.state.val,title:this.state.bookiInfo.title,total:this.state.val.total}
	                        }}>
	                    	    更多评论
	                    	</Link>
	                    </span>
	                </div>
        		    <div>
            		    {
            				info.length<=0?(<div className="no-comment">暂无评论~</div>):(
                           	    <Comment title={this.state.bookiInfo.title} data={info} />
            				)
            			}
        			</div>
        		</div>
            	<div className="book-love">
            	{
                    this.state.recommend.length>0 ?(<BookLove pathname={this.props.location.pathname} data={ this.state.recommend} />):(<div></div>)
            	}
            	</div>
            	<Footer history={this.props.history}/>
            </div>
		)
	}
}

export default Book;

// http://api.zhuishushenqi.com/post/review/best-by-book?book=579a0ea6174dee4119aacdad&limit=10

// 品论 api