import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import HeaderBar from '../../component/HeaderBar/headerBar';
import Footer from '../../component/Footer/footer'
import Comment from './Comment/comment';
import BookLove from './BookLove/bookLove';


import './book.less';

class Book extends Component {
	constructor(props){
         super(props)
         this.state = {isShow: false, //  短介绍 是否展示
         	           val:[],        //  评论
         	           recommend: []  // 可能喜欢的书籍
         	       }
	}
	handleClick(){
        this.setState({isShow:!this.state.isShow})
	}
	componentDidMount(){
		axios.get(`/post/review/best-by-book?book=${this.props.location.state.data.book._id}&limit=10`).then(res=>{
			this.setState({val:res.data.reviews})
		}).catch(err=>{
			console.log(err)
		})
		axios.get(`http://novel.juhe.im/recommend/${this.props.location.state.data.book._id}`).then(res=>{
            this.setState({recommend:res.data.data.books})
		}).catch(err=>{
			console.log(err)
		})
	}
	render() {
		const {data} = this.props.location.state
		var wordCount = data.book.wordCount>=10000?Math.round((data.book.wordCount)/10000) + "万":data.book.wordCount
		var info = this.state.val?this.state.val.slice(0,2):''
		return (
            <div className="book">
            	<HeaderBar title="书籍详情" history={this.props.history} />
            	<div className="book-info">
            		<div className="book-info-content">
            			<div className="book-top">
            				<div>
            					<img src={data.book.cover} alt={data.book.title}/>
            				</div>
            				<div>
            					<p>{data.book.title}</p>
            					<p><span>{data.book.author}</span> | {data.book.minorCate} | {wordCount}字</p>
            					<p>{}</p>
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
            				<span className="item">{data.book.latelyFollower}</span>
            			</p>
            			<p>
            				<span>读者留存率</span>
            				<span className="item">{data.book.retentionRatio}</span>
            			</p>
            			<p>
            				<span>日更字数/天</span>
            				<span className="item">2345</span>
            			</p>
            		</div>
            		<p className="linear"></p>
            		<div className="longIntro">
                       <p className={this.state.isShow?'actives':''}>{data.book.longIntro}</p>
                       <img className={this.state.isShow?'circle':''} onClick={this.handleClick.bind(this)} src={require('../../assets/arrowdown.svg')} />
            		</div>
            		<p className="linear"></p>
            		
            	</div>
            	<div className="hot-comment">
        		    <div className="comment-header">
	                    <span>
	                    	热门书评
	                    </span>
	                    <span>
	                    	<Link to="/">
	                    	    更多评论
	                    	</Link>
	                    </span>
	                </div>
        		    <div>
            		    {
            				info.length<=0?(<div className="no-comment">暂无评论~</div>):(
                           	    <Comment data={info} />
            				)
            			}
        			</div>
        		</div>
            	<div className="book-love">
            	{
                    this.state.recommend.length>0 ?(<BookLove data={ this.state.recommend.slice(0,4)} />):(<div></div>)
            	}
            	</div>
            	<Footer />
            </div>
		)
	}
}

export default Book;

// http://api.zhuishushenqi.com/post/review/best-by-book?book=579a0ea6174dee4119aacdad&limit=10

// 品论 api