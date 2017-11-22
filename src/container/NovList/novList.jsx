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
             <div>
                <ul>
	             	{
	                    data && data.map((item,index)=>{
	                    	return (
	                             
	                                <li key={index}>
	                                    <Link to="/">
	                                         <div>
	                                         	<div>
	                                         		<img src={item.book.cover}/>
	                                         	</div>
	                                         	<div>
	                                         		<p>{item.book.title}</p>
	                                         		<p>{item.book.shortIntro}</p>
	                                         		<p>{item.book.minorCate}</p>
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