import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { getRecommend, getComment } from '../../apiconfig/api.js';

import HeaderBar from '../../component/HeaderBar/headerBar';
import Footer from '../../component/Footer/footer'
import Comment from './Comment/comment';       //  小说评论 此处只取两个；
import BookLove from './BookLove/bookLove';    //  类似小说推荐列表


import './book.less';

class Book extends Component {
	constructor(props){
         super(props)
         this.state = {isShow: false, //  短介绍 是否展示
         	           val:[],        //  评论
         	           recommend: [],  // 可能喜欢的书籍
         	       }
	}
	handleClick(){
        this.setState({isShow:!this.state.isShow})
	}
	componentDidMount(){
		getRecommend(this.props.location.state.data.book._id).then(res=>{  // 推荐列表
			this.setState({recommend:res})
		})
		getComment(this.props.location.state.data.book._id).then(res=>{  //评论
            this.setState({val:res})
		})
	}
    componentWillReceiveProps(){
        getComment(this.props.history.location.state.id).then(res=>{ // 整老子好久的bug 老子记住你了  this.props.history.location.state.id ！== this.props.location.state.id
			this.setState({val:res})
		})
		getRecommend(this.props.history.location.state.id).then(res=>{
            this.setState({recommend:res})
		})
    }
    shouldComponentUpdate(a,b){         // 一直返回true 只要数据变更就重新render； 变更糟componentWillReceiveProps 里边
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
		const {data} = this.props.location.state
		var wordCount = data.book.wordCount>=10000?Math.round((data.book.wordCount)/10000) + "万":data.book.wordCount
		var info = this.state.val.reviews?this.state.val.reviews.slice(0,2):''
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
                       <p className={this.state.isShow?'actives':''}>{data.book.shortIntro}</p>
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
	                    	<Link to={{
	                    		pathname:"/allcomment/" + this.props.location.state.data.book._id,
                                state: {comment:this.state.val,title:data.book.title,total:this.state.val.total}
	                        }}>
	                    	    更多评论
	                    	</Link>
	                    </span>
	                </div>
        		    <div>
            		    {
            				info.length<=0?(<div className="no-comment">暂无评论~</div>):(
                           	    <Comment title={data.book.title} data={info} />
            				)
            			}
        			</div>
        		</div>
            	<div className="book-love">
            	{
                    this.state.recommend.length>0 ?(<BookLove pathname={this.props.location.pathname} data={ this.state.recommend} />):(<div></div>)
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