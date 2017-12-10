import React, { Component } from 'react';

import './bookListContent.less';

class BookListContent extends Component {
	render() {
		const {booklists} = this.props;
		return (
            <section className="book-list-content">
             	<ul className="book-list-content-scroll">
             		{
             			booklists && booklists.map((item,index)=>{
             				return (
                                <li onClick={this.wengToBookList.bind(this,item._id)} key={index}>
                                    <div className="book-list-cover">
                                    	<img src={'http://statics.zhuishushenqi.com' + item.cover}/>
                                    </div>
                                    <div className="book-list-info">
                                    	<p>{item.title}</p>
                                    	<p>{item.author}</p>
                                    	<p>{item.desc}</p>
                                    	<p>共{item.bookCount}本书 | {item.collectorCount}人收藏</p>
                                    </div>
                                </li>
             				)
             			})
             		}
             	</ul>
            </section>
		)
	}
	wengToBookList(id){
        this.props.wengToBookList(id)
	}
}

export default BookListContent;