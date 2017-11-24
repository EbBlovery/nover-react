import React, { Component } from 'react';

import HeaderBar from '../../component/HeaderBar/headerBar';

import './comment.less';

class Comment extends Component {
      render() {
	      // var item = this.props.data
            const {comment, title} = this.props.location.state;
            console.log(title,comment)
		return (
                <div>
                  <div>
                     <HeaderBar history={this.props.history} title={title}/>
                  </div>
                  <div>
                        
                  </div>
                </div>
		)
	}
}

export default Comment;