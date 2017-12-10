import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderBar from '../../component/HeaderBar/headerBar';
import RecommendList from '../../component/RecommendList/recommendList';

import {getMoreRecommend} from '../../store/action/index';

import './recommend.less';


class Recommend extends Component {
    componentDidMount(){
        this.props.getMoreRecommend(this.props.match.params.id)
    }
	render() {
		return (
            <div className="recommend">
                <HeaderBar history={this.props.history} title={this.props.moreRecommend?this.props.moreRecommend[0].node.title:''}/>
             	<RecommendList data={this.props.moreRecommend?this.props.moreRecommend:''} />
            </div>
		)
	}
}

function mapStateToProps(state) {
    return {
        moreRecommend:state.homeRecommend.moreRecommend
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMoreRecommend: (id)=>{
            dispatch(getMoreRecommend(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recommend);