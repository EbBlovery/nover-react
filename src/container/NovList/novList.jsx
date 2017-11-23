import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NoverInfo from './NoverInfo/noverInfo';

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
                                    <Link to={{
                                        pathname:"/"
                                    }}>
                                        <NoverInfo data={item} />
                                	</Link>
                                </li>
	                    	)
	                    })
	             	}
             	</ul>
             	<p className="loadmore">
                    <Link to={{
                        pathname: "/recommend/" + this.props.id,
                        state: this.props.data
                    }}>
                        查看更多>>
                    </Link>
                </p>
             	<p className="shadowBar"></p>
             </div>
     	 )
     }
}

export default NovList;