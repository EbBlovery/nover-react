import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CommendDetail from '../CommendDetail/commendDetail';

import './genderSection.less';

class GenderSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            i: 1
        }
    }
	render() {
		return (
            <section className="gender-section">
        		<ul>
        			{
        				this.props.data && this.props.data.map((item,index)=>{
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
        this.setState({i:this.state.i + 1})
	    FetchBook(this.state.i)
	}
}

export default GenderSection;

