import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import HeaderBar from '../../component/HeaderBar/headerBar';
import SearchDetail from '../../component/SearchDetail/searchDetail';

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
            	<HeaderBar history={this.props.history} title={this.props.title?this.props.title:''}/>
            	<SearchDetail data={this.props.searchData?this.props.searchData:''} />
            </div>
		)
	}
}

function mapStateToProps(state){
	return {
        searchData: state.homeRecommend.searchData,
        title: state.homeRecommend.title
	}
}
function mapDispatchToProps(dispatch){
	return {
		
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchNover);