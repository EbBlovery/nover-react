import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {getHomeCommend,handleSearch} from '../../store/action/index';

import Search from '../../component/Search/search';
import Banner from '../../component/Banner/banner';
import ContentNover from './ContentNover/contentNover';


class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {data: []}
    }
	componentDidMount(){
        this.props.getHomeCommend()
	}
	render() {
		return (
            <div>
                <Banner />
            	<Search getSearch={this.getSearch.bind(this)} history={this.props.history}/>
            	<ContentNover data={this.props.homeData?this.props.homeData:''}/>
            </div>
		)
	}
    getSearch(val){
        this.props.handleSearch(val)
    }
}

function mapStateToProps(state) {
    return {
        homeData: state.homeRecommend.homeData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getHomeCommend: (id)=>{
            dispatch(getHomeCommend(id))
        },
        handleSearch: (val) => {
            dispatch(handleSearch(val))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);