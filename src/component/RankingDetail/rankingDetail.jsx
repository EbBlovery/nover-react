import React, { Component } from 'react';

import './rankingDetail.less';

class RankingDetail extends Component {
	constructor(props){
		super(props)
		this.state = {
			isshow: false
		}
	}
	render() {
		const {gender,ranking} = this.props
		const rankTrue = ranking && ranking.filter((item)=>{
			return item.collapse === true
		})
		const rankFalse = ranking && ranking.filter((item)=>{
			return item.collapse === false
		})
		return (
		    <section className="ranking-section">
		    	<header className="ranking-head">{gender}</header>
		    	<div className="ranking-detail">
		    		<ul>
		    			{
                            rankFalse && rankFalse.map((item,index)=>{
                            	return (
                                    <li onClick={this.hadnleToRank.bind(this,item)} key={index}>
                                    	<img src={'http://statics.zhuishushenqi.com' + item.cover}/>
                                    	<p>{item.title}</p>
                                    </li>
                            	)
                            })
		    			}
		    			<li onClick={this.isShow.bind(this)} key='another'>
		    			    <img src={require("../../assets/ranking.svg")}/>
		    			    <p>别人家的排行榜<span className="pushDown"><img style={{transform:this.state.isshow?'rotate(180deg)':'rotate(0deg)'}} src={require("../../assets/pushDown.svg")}/></span></p>
		    			</li>
		    		</ul>
		    		<ul style={{display:this.state.isshow?'block':'none'}}>
		    			{
		    				rankTrue && rankTrue.map((item,index)=>{
                            	return (
                                    <li onClick={this.hadnleToRank.bind(this,item)} key={index}>
                                    	<p style={{marginLeft:'3rem'}}>{item.title}</p>
                                    </li>
                            	)
                            })
		    			}
		    		</ul>
		    	</div>
		    </section>
		)
	}
	isShow(){
		this.setState({isshow: !this.state.isshow})
	}
	hadnleToRank(item){
        const {handleGetList} = this.props;
        handleGetList(item)
	}
}

export default RankingDetail;