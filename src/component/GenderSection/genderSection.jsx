import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CommendDetail from '../../container/CommendDetail/commendDetail';

import './genderSection.less';

class GenderSection extends Component {
	render() {
		return (
            <section>
        		<ul>
        			{
        				this.props.data.books && this.props.data.books.map((item,index)=>{
                            return (
                                <li onClick={this.getBookInfo.bind(this,item._id)} key={index}>
                                    <CommendDetail data={item}/>
                                </li>
                            )
        				})
        			}
        		</ul>
        		<p onClick={this.getMore.bind(this)}>LoadMore...</p>
        	</section>
		)
	}
	getBookInfo(id){
	    this.props.history.push("/book/" + id)
	}
	getMore(){
	    const FetchBook = this.props.FetchBook;
	    FetchBook(20)
	}
}

export default GenderSection;

