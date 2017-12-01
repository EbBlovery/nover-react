import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import HeaderBar from '../../component/HeaderBar/headerBar';
import CommendDetail from '../CommendDetail/commendDetail';

import { getSub, getGender } from '../../store/action/index';

import './gender.less';

class Gender extends Component {
	constructor(props){
        super(props)
	}
	componentDidMount(){
		const { search, state} = this.props.location;
		this.props.getSub(search.split('=')[1],state.index);
		this.props.getGender(search.split("=")[1],this.props.match.params.name)
	}
	render() {
		console.log(this.props.list)
		return (
            <div className="genderDetail">
                <header className="gender-header">
            	     <HeaderBar title={this.props.list.major} history={this.props.history}/>
            	     <div></div>
            	     <nav className="gender-nav">
            	        <div className="gender-nav-scllor-1">
            	        	<ul className="gender-nav-type">
	            	        	<li>热门</li>
	            	        	<li>新书</li>
	            	        	<li>好评</li>
	            	        	<li>完结</li>
	            	        	<li>包月</li>
	            	        </ul>
            	        </div>
            	        <div className="gender-nav-scllor-2">
	            	     	<ul className="gender-nav-mins">
		            	     	{
		            	     		this.props.list.mins && this.props.list.mins.length>0 && this.props.list.mins.map((item,index)=>{
		            	     			return (
		            	     		        <li key={index}>
		            	     		        	{item}
		            	     		        </li>
		            	     			)
		            	     		})
		            	     	}
	            	     	</ul>
            	     	</div>
            	     </nav>
                </header>
            	<section>
            		<ul>
            			{
            				this.props.data.books && this.props.data.books.map((item,index)=>{
                                return (
                                    <li key={index}>
                                    	<Link to="/">
                                            <CommendDetail data={item}/>
                                    	</Link>
                                    </li>
                                )
            				})
            			}
            		</ul>
            	</section>
            </div>
		)
	}
}

function mapStateToProps(state){
    return {
    	list:state.getSubTitle,
    	data:state.getGender
    }
}

function mapDispatchToProps(dispatch){
	return {
		getSub: (type,index)=>{
			dispatch(getSub(type,index))
		},
		getGender: (type,major)=>{
        	dispatch(getGender(type,major))
        }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Gender);