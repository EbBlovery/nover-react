import React, { Component } from 'react';
import { connect } from 'react-redux';


import GenderHeader from '../../component/GenderHeader/genderHeader';
import GenderSection from '../../component/GenderSection/genderSection';

import { getSub, getGender } from '../../store/action/index';

import './gender.less';

class Gender extends Component {
	constructor(props){
        super(props)
        this.state = {
        	gender:'',
        	major:'',
        	type:'',
        	mins:'',
        	start:0
        }
	}
	componentDidMount(){
		const { search, state} = this.props.location;
		this.props.getSub(search.split('=')[1],state.index);
		this.props.getGender(search.split("=")[1],this.props.match.params.name)
	}
	render() {
		return (
            <div className="genderDetail">
                <GenderHeader FetchType={this.FetchType.bind(this)} history={this.props.history} list={this.props.list}/>
            	<GenderSection FetchBook={this.FetchBook.bind(this)} history={this.props.history} data={this.props.data} />
            </div>
		)
	}
	FetchType(type,mins){
         // type: 热门分类大类 name：二级分类 
        const { search } = this.props.location;
        console.log(search.split("=")[1],this.props.match.params.name,type,mins)
        this.props.getGender(search.split("=")[1],this.props.match.params.name,type,mins)
        this.setState({
        	gender:search.split("=")[1],
        	name:this.props.match.params.name,
        	type:type,
        	mins:mins
        })
	}
	FetchBook(start){
        console.log(...this.state)
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
		getSub: (gender,index)=>{
			dispatch(getSub(gender,index))
		},
		getGender: (gender,major,type,mins,start)=>{
        	dispatch(getGender(gender,major,type,mins,start))
        }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Gender);