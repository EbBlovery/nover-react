import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import HeaderBar from '../../component/HeaderBar/headerBar';

import {getCommentDetail} from '../../apiconfig/api.js';

import {tab} from '../../util/util.js';


import './commentDetailList.less';

class CommentDetailList extends Component {
	 constructor(props){
	 	super(props)
	 	this.state = {comment: []}
	 }
	 componentDidMount(){
	 	 getCommentDetail(this.props.location.state.id).then(res=>{
	 	 	this.setState({comment: res})
	 	 })
	 }
     render(){
	     const {data,title} = this.props.location.state
          console.log(this.state.comment,data)
     	 return (
             <div className="commentAvator">
             	<div>
             	    <HeaderBar history={this.props.history} title={title}/>
             	</div>
             	<div className="comment-detail">
             		<div className="comment-left">
             			<img src={'http://statics.zhuishushenqi.com' + data.author.avatar}/>
             			<p>
             				<span>{data.author.nickname}</span>
             				<span>n天前</span>
             			</p>
             		</div>
             		<div className="comment-content">
             			<p>{data.content}</p>
             		</div>
             	</div>
             	<p className="commentCount">共{data.commentCount}条回复</p>
             	<div className="comment-list">
         			<ul>
         				{
         					this.state.comment && this.state.comment.map((item,index)=>{
         						const days =  tab((new Date(item.created)).toLocaleDateString().split('/').join('-'));
								var day = '';
								if(days<=7){
									day = days + '天';
								}else if(day<=30){
									day = (days/7).toFixed(0) + '周'
								}else{
									day = '1月前'
								}
         						return (
                                    <li key={index}>
                                    	<div className="list-left">
                                    		<img src={'http://statics.zhuishushenqi.com' + item.author.avatar}/>
                                    	</div>
                                    	<div className="list-right">
                                    		<div className="list-right-div">
                                        		<p>{item.author.nickname}</p>
                                        		<p>{day}前</p>
                                    		</div>
                                    		<p className="content">{item.content}</p>
                                    	</div>
                                    </li>
         						)
         					})
         				}
         			</ul>
         		</div>
             </div>
     	 )
     }
}

export default CommentDetailList;