import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import HeaderBar from '../../../component/HeaderBar/headerBar';
import CommendDetail from '../../CommendDetail/commendDetail';

import './searchNover.less';

class SearchNover extends Component {
	constructor(props){
        super(props)
        this.state = { title: '' }
	}
	componentDidMount(){
		const t = this.props.location.search.split('=')[1]
		const tit = '跟"' + t + '"有关的书籍'
		this.setState({title: tit})
	}
	render() {
		return (
            <div className="searchNover">
            	<div>
            		<HeaderBar history={this.props.history} title={this.state.title}/>
            	</div>
            	<div className="searchDetail">
	             	<ul className="searchDetail-ul">
	             		{
	             			this.props.data && this.props.data.map((item,index)=>{
	             				const items = {};
	             			    items.book = item;
	             				return (
	                                <li className="searchDetail-li" key={index}>
	                                	<Link to={{
	                                		pathname:"/book/" + item._id,
	                                        state:{data: items}
	                                	}}>
	                                		<CommendDetail data={item}/>
	                                	</Link>
	                                	<p className="linear"></p>
	                                </li>
	             				)
	             			})
	             		}
	             	</ul>
	             	<div>
	             		<p className="show-more">没有更多书籍</p>
	             	</div>
            	</div>
            </div>
		)
	}
}

function mapStateToProps(state){
	return {
         data: state.search.books
	}
}
function mapDispatchToProps(dispatch){
	return {
		
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchNover);