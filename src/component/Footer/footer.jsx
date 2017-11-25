import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {handleSearch} from '../../store/action/index';

import './footer.less';

class Footer extends Component {
    constructor(props){
        super(props)
        this.state = { value: '总裁' }
    }
    handleSubmits(e){
        e.preventDefault();
        // getSearch(this.state.value).then(res=>{
        //     console.log(res)
        // })
        console.log(this.props.history)
        this.props.handleSearch(this.state.value);
        this.props.history.push({pathname:'/search',search: '?value=' + this.state.value})
    }
    handleChanges(e){
        this.setState({value:e.target.value})
    }
	render(){
		return (
            <div className="footer">
            	<div className="footer-search">
                    <form onSubmit={this.handleSubmits.bind(this)}>
                        <label>
                        	<input onChange={this.handleChanges.bind(this)} value={this.state.value} type="text" />
                        	<button>搜索</button>
                        </label>
                    </form>
            	</div>
            	<div className="footer-navbar">
	            	<div><Link to="/">首页</Link></div>|
	            	<div><Link to="/">分类</Link></div>|
	            	<div><Link to="/">排行</Link></div>|
	            	<div><Link to="/">书单</Link></div>|
	            	<div><Link to="/">VIP专区</Link></div>
            	</div>
            	<div className="category">
            		<p>ICP:xxxxxxxxxxxx12号Copynight @ 2017</p>
            		<p>电话：123123123123</p>
            	</div>
            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Footer);