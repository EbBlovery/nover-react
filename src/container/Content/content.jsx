import React, { Component } from 'react';
import axios from 'axios';

import Search from '../Search/search';
import Banner from '../../component/Banner/banner';
import ContentNover from './ContentNover/contentNover';


class Content extends Component {
    constructor(props){
        super(props)
        this.state = {data: []}
    }
	componentDidMount(){
        Promise.all([this.getVal('5912825ba1dbf3ad33ee7ffe'),this.getVal('59128334694d1cda365b8985'),this.getVal('59128365e5a3262c37488e3d'),this.getVal('5912a9d08973b2fe33614642'),this.getVal('5912aa17e647570434175d34'),this.getVal('5912872f8973b2fe3361463f'),this.getVal('591284376e2e237c36d7b8bd')])
              .then(res=>{
              	 this.setState({data: res})
              }).catch(err=>{
              	 console.log(err)
              })
	}
	getVal(id){
        return axios.get(`/recommendPage/node/books/all/${id}`).then(res=>{
        	return res.data.data
        }).catch(err=>{
        	console.log(err)
        })
	}
	render() {
		return (
            <div>
                <Banner />
            	<Search history={this.props.history}/>
            	<ContentNover data={this.state.data}/>
            </div>
		)
	}
}

export default Content;