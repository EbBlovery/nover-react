import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CommentDetail from '../Comment/CommentDetail';


class AllCommentDetail extends Component {
	constructor(props){
        super(props)
        this.state = {
            i: 10
        }
    }
	render() {
		const {comments,bookdetail,total} = this.props;
		return (
            <section>
            	<div className="allComment-list">
                    <ul>
                        {
                            comments && comments.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <Link to={{
                                            pathname:"/commentdetaillist/"+ item._id,
                                            state:{title: bookdetail.title,data:item,id:item._id}
                                        }}>
                                            <CommentDetail data={item}/>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="loadMore">
                    {
                        (total>this.state.i)?(<p onClick={this.loadMore.bind(this)}>Load More ...</p>):(<p>没有更多评论</p>)
                    }
                </div>
            </section>
		)
	}
	loadMore(){
		this.setState({i: this.state.i + 10})
        this.props.loadMore(this.state.i)
	}
}

export default AllCommentDetail;