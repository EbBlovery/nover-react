import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import HeaderBar from '../../component/HeaderBar/headerBar';
import CommendDetail from '../CommendDetail/commendDetail';

import './gender.less';

class Gender extends Component {
	constructor(props){
        super(props)
        this.state = {}
	}
	render() {
		console.log(this.props)
		return (
            <div className="genderDetail">
                <header>
            	     <HeaderBar title={this.props.list.major} history={this.props.history}/>
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

export default connect(mapStateToProps,null)(Gender);