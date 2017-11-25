import React, { Component } from 'react';

import HeaderBar from '../../../component/HeaderBar/headerBar';


class SearchNover extends Component {
	constructor(props){
        super(props)
        this.state = { title: '' }
	}
	componentDidMount(){
		const t = this.props.location.search.split('=')[1]
		const tit = '跟"' + t + '"有关的书籍'
		this.setState({title: tit})
	}
	render() {
		return (
            <div>
            	<div>
            		<HeaderBar history={this.props.history} title={this.state.title}/>
            	</div>
            </div>
		)
	}
}

export default SearchNover;