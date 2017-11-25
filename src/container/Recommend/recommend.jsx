import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NoverInfo from '../NovList/NoverInfo/noverInfo';

import HeaderBar from '../../component/HeaderBar/headerBar';

import './recommend.less';

class Recommend extends Component {
    constructor(props){
        super(props)
        this.state = { data: [], title: '' }
    }
    componentDidMount(){
        console.log(this.props)
        if(!this.props.title){
            var {data,title} = this.props.location.state;
            this.setState({data: data,title: title})
        }else{
            var {data,title} = this.props;
            console.log(data,title)
        }
    }
	render() {
		
		return (
             <div className="recommend">
             	<div>
             		<HeaderBar history={this.props.history} title={this.state.title}/>
             	</div>
             	<ul className="recommend-ul">
             		{
             			this.state.data && this.state.data.map((item,index)=>{
             				return (
                                <li className="recommend-li" key={index}>
                                	<Link to={{
                                		pathname:"/book/" + item.book._id,
                                        state:{data: item}
                                	}}>
                                		<NoverInfo data={item} />
                                	</Link>
                                	<p className="linear"></p>
                                </li>
             				)
             			})
             		}
             	</ul>
             	<div>
             		<p className="show-more">没有更多书籍</p>
             	</div>
             </div>
		)
	}
}

export default Recommend;