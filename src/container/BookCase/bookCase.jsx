import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderBar from '../../component/HeaderBar/headerBar';
import BookCaseList from '../../component/BookCaseList/bookCaseList';
import Footer from '../../component/Footer/footer';


class BookCase extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: []
		}
	}
	componentDidMount(){
        const data = localStorage.getItem('bookName');
        if(data){
        	this.setState({data:JSON.parse(data)})
        }
	}
    render() {
    	return (
            <div>
            	<HeaderBar title="我的书架" history={this.props.history}/>
            	<BookCaseList data={this.state.data?this.state.data:''}/>
            	<Footer history={this.props.history}/>
            </div>
    	)
    }
}

function mapStateToProps(state){
	return {

	}
}

function masDispatchToProps(dispatch){
	return {
        
	}
}

export default connect(mapStateToProps,masDispatchToProps)(BookCase);
