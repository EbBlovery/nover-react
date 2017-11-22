import React, { Component } from 'react';
import axios from 'axios';

import Search from '../../container/Search/search';
import Banner from '../../container/Banner/banner';
import ContentNover from './ContentNover/contentNover';

import data from '../../mock/list.json';

class Content extends Component {
	componentDidMount(){
        // axios.get('../../mock/list.json').then(res=>{
        // 	console.log(res)
        // }).catch(err=>{
        // 	console.log(err)
        // })
        console.log(JSON.parse(data))
	}
	render() {
		return (
            <div>
                <Banner />
            	<Search />
            	<Nover />
            </div>
		)
	}
}

export default Content;