import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './bookListDetailContent.less';

class BookListDetailContent extends Component {
	render() {
		const {bookcontent} = this.props;
		return (
            <section className="bookListDetailContent">
            	<div className="bookListDetailContent-header">
            		<div className="book-list-content-author">
            			<img src={ bookcontent && 'http://statics.zhuishushenqi.com' + bookcontent.author.avatar}/>
            			<div>
            				<span>{ bookcontent && bookcontent.author.nickname || ''}</span>
            				<span>{'1亿年前'}</span>
            			</div>
            		</div>
            		<div className="book-list-content-title">
            		    <p>{ bookcontent && bookcontent.title}</p>
            		</div>
            		<div className="book-list-content-desc">
            			<p>{ bookcontent && bookcontent.desc}</p>
            		</div>
            		<div className="book-list-content-nickname">
            			<img src={ bookcontent && 'http://statics.zhuishushenqi.com' + bookcontent.author.avatar}/>
            			<p>创建自 <span style={{color: '#ab946a'}}>{ bookcontent && bookcontent.author.nickname}</span></p>
            		</div>
            	</div>
            	<div className="bookListDetailContent-list">
            	    <ul className="list-ul">
            	    	{
	            			bookcontent && bookcontent.books.map((item,index)=>{
	            				return (
                                    <li key={index}>
                                        <Link to={"/book/" + item.book._id}>
	                                    	<div className="book-item">
	                                    		<img src={'http://statics.zhuishushenqi.com' + item.book.cover}/>
	                                    		<div>
	                                    			<p>{item.book.title}</p>
	                                    			<p>{item.book.author} | {item.book.cat} | {item.book.latelyFollower}人气</p>
	                                    		</div>
	                                    	</div>
	                                    	<div className="book-good">
	                                    		<i>好看</i>
	                                    	</div>
                                    	</Link>
                                    </li>
	            				)
	            			})
	            		}
            	    </ul>
            	</div>
            </section>
		)
	}
}

export default BookListDetailContent;