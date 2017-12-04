import React, { Component } from 'react';

import {tab} from '../../util/util.js';


class UserCommentList extends Component {
	constructor(props){
    	super(props)
    	this.state = {
    		count: 10
    	}
    }
	render() {
		const {userCommment,len} = this.props;
		return (
            <section>
            	<div className="comment-list">
	     			<ul>
	     				{
	     					userCommment && userCommment.map((item,index)=>{
	     						const days =  tab((new Date(item.created)).toLocaleDateString().split('/').join('-'));
	     						return (
	                                <li key={index}>
	                                	<div className="list-left">
	                                		<img src={'http://statics.zhuishushenqi.com' + item.author.avatar}/>
	                                	</div>
	                                	<div className="list-right">
	                                		<div className="list-right-div">
	                                    		<p>{item.author.nickname}</p>
	                                    		<p>{days}前</p>
	                                		</div>
	                                		<p className="content">{item.content}</p>
	                                	</div>
	                                </li>
	     						)
	     					})
	     				}
	     			</ul>
	     		</div>
	            <div className="loadMore">
	                {
	                    this.state.count<=len?(<p>暂无更多评论</p>):(<p onClick={this.loadMore.bind(this)}>Laad More ...</p>)
	                }
                </div>
            </section>
		)
	}
	loadMore(){
		this.setState({count: this.state.count + 10 })
        this.props.LoadMore(this.state.count)
	}
}

export default UserCommentList;