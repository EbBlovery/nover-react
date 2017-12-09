import React, { Component } from 'react';

import './chapterDetailContent.less';

class ChapterDetailContent extends Component {
	render() {
		const {body,lastChapter,value} = this.props;
		return (
            <section>
            	<div className="chapter-detail-content">
            		<div onClick={this.handleClickShowBtn.bind(this)} id="chapterContent">
                        {
                        	body && body.map((item,index)=>{
                        		return <p key={index}>{item}</p>
                        	})
                        }
            		</div>
            	</div>
            	<footer className="content-button">
        			<button onClick={this.handleToPrev.bind(this)} className={value?"disabled":''} disabled={value}>上一章</button>
        			<button onClick={this.handleToBookCase.bind(this)}>加书架</button>
        			<button onClick={this.handleToCatalog.bind(this)}>目录</button>
        			<button onClick={this.handleToNext.bind(this)}  className={lastChapter?"disabled":''} disabled={lastChapter}>下一章</button>
        		</footer>
            </section>
		)
	}
	handleClickShowBtn(){
		this.props.handleClickShowBtn()
	}
	handleToPrev(){

	}
	handleToBookCase(){

	}
	handleToCatalog(){
        this.props.handleCloseChapter()
	}
	handleToNext(){

	}
}


export default ChapterDetailContent;