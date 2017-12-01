import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSub,getGender } from '../../store/action/index';

import './classifyContent.less';

class ClassifyContent extends Component {
	render() {
		const {data} = this.props;
		console.log(data)
		return (
            <div className="list-section">
                <article>{this.props.title}</article>
                <ul className="classify-ul">
            	{
            		data && data.map((item,index)=>{
            			return (
                            <li onClick={this.handleGetClassify.bind(this,this.props.gender,item,index)} className="classify-li" key={index}>
                                <div className="classify-content">
                                	<span>{item.name}</span>
                                	<span>{item.bookCount}</span>
                                </div>
                            </li>
            			)
            		})
            	}
            	</ul>
            </div>
		)
	}
	handleGetClassify(type,item,index){
		this.props.history.push('/gender/' + item.name + '?gender=' + type,{index:index});
		this.props.getSub(type,index);
		this.props.getGender(type,item.name)
	}
}

function mapStateToProps(state) {

}
function mapDispatchToProps(dispatch) {
    return {
        getSub:(type,index)=>{
            dispatch(getSub(type,index))
        },
        getGender: (type,major)=>{
        	dispatch(getGender(type,major))
        }
    }
}

export default connect(null,mapDispatchToProps)(ClassifyContent);