import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import {tab,judegData} from '../../util/util.js';


import './bookDetail.less';

class BookDetail extends Component {
	constructor(props){
        super(props)
        this.state = {
        	isShow: false, //  短介绍 是否展示
        	isAdd: false
        }
	}
	componentDidMount(){
        var isAdd = judegData(this.props.match.params.id);
        this.setState({isAdd: isAdd})
	}
	render() {
		const {bookdetail} = this.props;
		if(bookdetail){
			var updated = bookdetail.updated && tab((new Date(bookdetail.updated)).toLocaleDateString().split('/').join('-'));
            var wordCount = bookdetail.wordCount>=10000?Math.round((bookdetail.wordCount)/10000) + "万":bookdetail.wordCount
		}
		var styles =  {background:this.state.isAdd?'#999':'',color:this.state.isAdd?'#fff':'',border:this.state.isAdd?'1px solid #999':''}
		return (
			<section>
                <div className="book-info">
	        		<div className="book-info-content">
	        			<div className="book-top">
	        				<div>
	        					<img src={bookdetail && 'http://statics.zhuishushenqi.com' + bookdetail.cover} alt={bookdetail && bookdetail.title}/>
	        				</div>
	        				<div>
	        					<p>{bookdetail && bookdetail.title}</p>
	        					<p><span>{bookdetail && bookdetail.author}</span>&nbsp;&nbsp; | &nbsp;&nbsp;{bookdetail && (bookdetail.minorCate || bookdetail.majorCate)}&nbsp;&nbsp; |&nbsp;&nbsp; {wordCount}字</p>
	        					<p>{updated && updated.toString()}</p>
	        				</div>
	        			</div>
	        			<div className="book-bot">
	        				<span style={styles} onClick={this.handleToBookCase.bind(this)}>
                                {this.state.isAdd?'撤出书架':'加入书架'}
	        				</span>
	        				<span>开始阅读</span>
	        			</div>
	        		</div>
	        		<p className="linear"></p>
	        		<div className="book-person">
	        			<p>
	        				<span>追人气</span>
	        				<span className="item">{bookdetail && bookdetail.latelyFollower}</span>
	        			</p>
	        			<p>
	        				<span>读者留存率</span>
	        				<span className="item">{bookdetail && bookdetail.retentionRatio}%</span>
	        			</p>
	        			<p>
	        				<span>日更字数/天</span>
	        				<span className="item">{bookdetail && bookdetail.serializeWordCount || 0}</span>
	        			</p>
	        		</div>
	        		<p className="linear"></p>
	        		<div className="longIntro">
	                   <p className={this.state.isShow?'actives':''}>{bookdetail && bookdetail.longIntro}</p>
	                   <img className={this.state.isShow?'circle':''} onClick={this.handleClick.bind(this)} src={require('../../assets/arrowdown.svg')} />
	        		</div>
	        		<p className="linear"></p>
	        	</div>
				<div className="section-list">
                    <p>
                        <Link to={{
                            pathname: '/sectionContents/'+ bookdetail._id + '/chapter',
                            state: {title: bookdetail.title}

                        }}>
                            <span>目录</span>
                            <span>{bookdetail && bookdetail.lastChapter}</span>
                        </Link>
                    </p>
                </div>
                <p className="linear"></p>
			</section>
		)
	}
	handleClick(){
		this.setState({isShow: !this.state.isShow})
	}
	handleToBookCase(){
		this.props.handleBookCase()
		this.setState({isAdd:!this.state.isAdd})
	}
}

export default BookDetail;