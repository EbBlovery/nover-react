import React, { Component } from 'react';
import { connect } from 'react-redux';

import RankNavHeader from './RankNavHeader/rankNavHeader';
import RankContent from '../../component/RankContent/rankContent';

import {getRankList,getOtherRankList} from '../../store/action/index';


class RankList extends Component {
	componentDidMount(){
        this.props.getRankList(this.props.match.params.id)
	}
	render() {
		return (
            <div>
            	<RankNavHeader getDetailRank={this.getDetailRank.bind(this)} rankId={this.props.rankId?this.props.rankId:''} rankTitle={this.props.rankTitle?this.props.rankTitle:''}  history={this.props.history}/>
                <RankContent data={this.props.rankList?this.props.rankList:''}/>
            </div>
		)
	}
	getDetailRank(id){
        this.props.getOtherRankList(id)
	}
}

function mapStateToProps(state){
	console.log(state)
	return{
        rankList: state.Ranking.rankList,
        rankId: state.Ranking.rankId,
        rankTitle: state.Ranking.rankTitle
	}
}

function mapDisptchToProps(dispatch){
	return {
        getRankList: (id)=>{
            dispatch(getRankList(id))
        },
        getOtherRankList:(id)=>{
        	dispatch(getOtherRankList(id))
        }
	}
}

export default connect(mapStateToProps,mapDisptchToProps)(RankList);