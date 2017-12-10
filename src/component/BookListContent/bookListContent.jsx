import React, { Component } from 'react';

import './bookListContent.less';

class BookListContent extends Component {
	render() {
		const {booklists} = this.props;
		return (
            <section>
             	<ul>
             		{
             			booklists && booklists.map((item,index)=>{
             				return (
                                <li key={index}>
                                    <div>
                                    	<img src={'http://statics.zhuishushenqi.com' + item.cover}/>
                                    </div>
                                    <div>
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
}

export default BookListContent;