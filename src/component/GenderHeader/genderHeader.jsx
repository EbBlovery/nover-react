import React, {Component} from 'react';

import HeaderBar from '../HeaderBar/headerBar';

import './genderHeader.less';

class GenderHeader extends Component {
	constructor(props){
		super(props)
        this.state = {
            type:'hot',
            minor:'',
        }
	}
	render() {
		return (
            <header className="gender-header">
        	     <HeaderBar title={this.props.list.major} history={this.props.history}/>
        	     <div></div>
        	     <nav className="gender-nav">
        	        <div className="gender-nav-scllor-1">
        	        	<ul className="gender-nav-type">
            	        	<li onClick={this.handleGetType.bind(this,'hot')}>热门</li>
            	        	<li onClick={this.handleGetType.bind(this,'new')}>新书</li>
            	        	<li onClick={this.handleGetType.bind(this,'reputation')}>好评</li>
            	        	<li onClick={this.handleGetType.bind(this,'over')}>完结</li>
            	        	<li onClick={this.handleGetType.bind(this,'monthly')}>包月</li>
            	        </ul>
        	        </div>
        	        <div className="gender-nav-scllor-2">
            	     	<ul className="gender-nav-mins">
	            	     	{
	            	     		this.props.list.mins && this.props.list.mins.length>0 && this.props.list.mins.map((item,index)=>{
	            	     			return (
	            	     		        <li onClick={this.handleGetMins.bind(this,item)} key={index}>
	            	     		        	{item}
	            	     		        </li>
	            	     			)
	            	     		})
	            	     	}
            	     	</ul>
        	     	</div>
        	    </nav>
            </header>
		)
	}
	handleGetType(type){
        const FetchType = this.props.FetchType;
        FetchType(type,this.state.minor)
        this.setState({type:type})
	}
	handleGetMins(mins){
        const FetchType = this.props.FetchType;
		FetchType(this.state.type,mins)
	}
}

export default GenderHeader;




