import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './novList.less';

class NovList extends Component {
     render(){
     	 var data
     	 if(this.props.data){
             data = this.props.data.slice(1,5)
     	 }

     	 return (
             <div className="novlist">
                <h4 className="list-title">{this.props.title}</h4>
                <ul className="novlist-ul">
	             	{
	                    data && data.map((item,index)=>{
	                    	return (
                                <li className="novlist-li" key={index}>
                                    <Link to="/">
                                         <div className="novlist-div">
                                         	<div className="novlist-left">
                                         		<img src={item.book.cover}/>
                                         	</div>
                                         	<div className="novlist-right">
                                         		<p>{item.book.title}</p>
                                         		<p>{item.book.shortIntro}</p>
                                         		<p>{item.book.minorCate} | <span>{item.book.latelyFollower}</span>人气</p>
                                         	</div>
                                         </div>
                                	</Link>
                                </li>
	                    	)
	                    })
	             	}
             	</ul>
             	<p className="loadmore">查看更多>></p>
             	<p className="shadowBar"></p>
             </div>
     	 )
     }
}

export default NovList;