import React, { Component } from 'react';

import HeaderBar from '../../component/HeaderBar/headerBar';
import Footer from '../../component/Footer/footer'

import './book.less';

class Book extends Component {
	constructor(props){
         super(props)
         this.state = {isShow: false};
	}
	handleClick(){
		console.log(this.state.isShow)
        this.setState({isShow:!this.state.isShow})
	}
	render() {
		const {data} = this.props.location.state
		console.log(data)
		var wordCount = data.book.wordCount>=10000?Math.round((data.book.wordCount)/10000) + "万":data.book.wordCount
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
                       <span><img onClick={this.handleClick.bind(this)} src={require('../../assets/arrowdown.svg')} /></span>
            		</div>
            		<p className="linear"></p>
            		<div className="hot-comment">
            			
            		</div>
            	</div>
            	<div className="book-love">
                       asdasdasd
            	</div>
            	<Footer />
            </div>
		)
	}
}

export default Book;

// http://api.zhuishushenqi.com/post/review/best-by-book?book=579a0ea6174dee4119aacdad&limit=10

// 品论 api