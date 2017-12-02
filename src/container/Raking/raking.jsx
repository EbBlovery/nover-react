import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from '../../component/Footer/footer';
import RankingDetail from '../../component/RankingDetail/rankingDetail';

import {getRankingDetail} from '../../store/action/index';

import './raking.less';

class Raking extends Component {
	componentDidMount(){
		this.props.getRankingDetail()
	}
	render() {
		const {rank} = this.props.ranking
		return (
            <div>
                <RankingDetail handleGetList={this.handleGetList.bind(this)} gender="男生" ranking={rank?rank.male:''}/>
                <RankingDetail handleGetList={this.handleGetList.bind(this)} gender="女生" ranking={rank?rank.female:''}/>
            	<Footer history={this.props.history}/>
            </div>
		)
	}
	handleGetList(item){
        console.log(item)
	}
}

function mapStateToProps(state){
    return {
        ranking:state.Ranking
    }
}

function mapDispatchToPraps(dispatch){
	return {
        getRankingDetail: ()=>{
            dispatch(getRankingDetail())
        }
	}
}

export default connect(mapStateToProps,mapDispatchToPraps)(Raking);