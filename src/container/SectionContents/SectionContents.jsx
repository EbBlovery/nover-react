import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import HeaderBar from '../../component/HeaderBar/headerBar';
import ChapterContent from '../../component/ChapterContent/chapterContent';

import {getChapterList} from '../../store/action/index';


import './sectionContents.less';

class SectionContents extends Component {
	componentDidMount(){
		const {id} = this.props.match.params
        this.props.getChapterList(id)
	}
	render() {
		return (
            <div className="chapter">
                <HeaderBar title="优质书源" history={this.props.history}/>
                <ChapterContent data={this.props.chapter?this.props.chapter:''} match={this.props.match}/>
            </div>
		)
	}
}

function mapStateToProps(state){
    console.log(state)
	return {
        chapter: state.chapter.chapterlist
	}
}

function masDispatchToProps(dispatch){
	return {
        getChapterList: (id)=>{
        	dispatch(getChapterList(id))
        }
	}
}

export default connect(mapStateToProps,masDispatchToProps)(SectionContents);