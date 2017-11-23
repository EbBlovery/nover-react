import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './novCommend.less';

class NovCommend extends Component {
    componentDidMount(){
        console.log(this.props.title)
    }
	render() {
        var data
        if(this.props.data){
            data = this.props.data.slice(1,5)
            console.log(data)
        }
		return (
            <div className="commend">
                <h4 className="title">{this.props.title}</h4>
                <ul className="commend-ul">
                {
                    data && data.map((item,index)=>{
                        return (
                            <li className="commend-ul-li" key={index}>
                                <Link to="/">
                                    <img src={item.book.cover}/>
                                    <p>{item.book.title}</p>
                                </Link>
                            </li>
                        )
                    })
                }
                </ul>
                <p className="loadmore">
                    <Link to={{
                        pathname:"/recommend/" + this.props.id,
                        state: {data:this.props.data,title:this.props.title}
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