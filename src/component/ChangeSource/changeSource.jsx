import React, { Component } from 'react';


import './changeSource.less';

class ChangeSource extends Component {
	render() {
		const {isShowhideListChapter,isShowSource,source,chapterlist} = this.props;
		return (
            <section style={{transform:isShowSource?'translateY(0)':'translateY(100%)'}} className="changeSource">
                <p className="source-header" key="laiyuan"><span onClick={this.clickCloseSourceBar.bind(this)}>×</span> 选择来源</p>
                <ul className="source-ul">
                    {
                        source && source.map((item,index)=>{
                            return (
                                <li onClick={this.getChangeSource.bind(this,item._id)} key={index}>
                                    <span className="source-logo">{item.host.charAt(0).toUpperCase()}</span>
                                    <p className="source-info">
                                        <span>{item.host}</span>
                                        <span>{item.lastChapter}</span>
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="hide-list-chapter" style={{transform:isShowhideListChapter?'translateX(0)':'translateX(100%)'}}>
                    <ul className="hide-ul">
                        {
                            chapterlist && chapterlist.map((item,index)=>{
                                return (
                                    <li onClick={this.handleCloseSourceChapter.bind(this,item.link,item.title,chapterlist.length,index)} key={index}>
                                        {item.title}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
		)
	}
	getChangeSource(id){
        this.props.getChangeSource(id)
	}
	handleCloseSourceChapter(link,title,len,index){
        this.props.handleCloseSourceChapter(link,title,len,index)
	}
	clickCloseSourceBar(){

	}
}

export default ChangeSource;