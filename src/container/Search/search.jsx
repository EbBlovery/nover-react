import React, { Component } from 'react';

import {getSearch} from '../../apiconfig/api.js';

import { handleSearch } from '../../store/action/index.js';

import { connect } from 'react-redux';



import './search.less'; 

class Search extends Component {
    constructor(props){
        super(props)
        this.state = { value: '总裁' }
    }
    handleSubmit(e){
        e.preventDefault();
        // getSearch(this.state.value).then(res=>{
        //     console.log(res)
        // })
        this.props.handleSearch(this.state.value)
        this.props.history.push({pathname:'/search',search: '?value=' + this.state.value})
    }
    handleChange(e){
        this.setState({value:e.target.value})
    }
	render() {
		return (
            <form onSubmit={this.handleSubmit.bind(this)} className="search">
                <div>
                	<label>
	            		<input onChange={this.handleChange.bind(this)} value={this.state.value} id="search-text" type="text" />
	            	</label>
                </div>
            	<div>
            	    <button><img src={require("../../assets/search.svg")} /></button>
            	</div>
            </form>
		)
	}
}

function mapStateToProps(state){
    return {

    }
}

function mapDispatchToProps(dispatch){
    return {
        handleSearch: (key) => {
             dispatch(handleSearch(key))       
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);