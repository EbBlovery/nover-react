import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './novList.less';

class NovList extends Component {
     render(){
     	 var data
     	 if(this.props.data){
             data = this.props.data.slice(1,5)
             console.log(data)
     	 }

     	 return (
             <div className="novlist">
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
                                         		<p>{item.book.minorCate} | {item.book.latelyFollower}人气</p>
                                         	</div>
                                         </div>
                                	</Link>
                                </li>
	                    	)
	                    })
	             	}
             	</ul>
             </div>
     	 )
     }
}

export default NovList;