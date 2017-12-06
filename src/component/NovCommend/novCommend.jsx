import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CommendList from './CommendList/commendList';  // 推荐小说横向排序的

import './novCommend.less';

class NovCommend extends Component {
    componentDidMount(){
        
    }
	render() {
        var data
        if(this.props.data){
            data = this.props.data.slice(1,5)
        }
		return (
            <div className="commend">
                <h4 className="title">{this.props.title}</h4>
                <CommendList data={data} />  
                <p className="loadmore">
                    <Link to={{
                        pathname:"/recommend/" + this.props.id
                    }}>
                        查看更多>>
                    </Link>
                </p>
                <p className="shadowBar"></p>
            </div>
		)
	}
}

export default NovCommend;