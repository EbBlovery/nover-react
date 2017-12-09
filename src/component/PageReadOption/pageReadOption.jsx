import React, { Component } from 'react';

import './pageReadOption.less'

class PageReadOption extends Component {
	render() {
		const {title,style,value,lastChapter} = this.props;
		return (
			<section className="pageReadOption" style={style}>
    			<div className="pageOption-Top">
                     <p>{title?title:''}<span onClick={this.handleShowSource.bind(this)} className="boochangesource">换源</span></p>
    			</div>
    			<div className="pageOption-Bottom">
                     <div className="chapterBtn-top">
                     	<button className={'btn rectangle'}>Aa-</button>
                     	<button className={'btn rectangle'}>Aa+</button>
                     	<button className={'btn ' + 'square'}>月</button>
                     	<button onClick={this.handleCloseChapter.bind(this)} className={'btn ' + 'square'}><span className="item"></span></button>
                     </div>
                     <div className="chapterBtn-bot">
                     	<button onClick={this.handleToPrev.bind(this)} className={'btn btn-rectangle'} disabled={value}>上一章</button>
                     	<button onClick={this.handleToNext.bind(this)} className={'btn btn-rectangle'} disabled={lastChapter}>下一章</button>
                     </div>
    			</div>
    		</section>
		)
	}
	handleShowSource(){
        this.props.handleShowSource()
	}
	handleCloseChapter(){
        this.props.handleCloseChapter()
	}
	handleToPrev(){

	}
	handleToNext(){

	}
}

export default PageReadOption;