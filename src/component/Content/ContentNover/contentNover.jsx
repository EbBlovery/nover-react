import React, { Component } from 'react';

import NovList from '../../../container/NovList/novList';
import NovCommend from '../../../container/NovCommend/novCommend';

class ContentNover extends Component {
	render(){
		return (
             <div key="index">
             	<NovList title="女生最爱" data={this.props.data[0]}/>
                  <NovList title="男生热门" data={this.props.data[1]}/>
                  <NovCommend title="出版精品" data={this.props.data[2]}/>
                  <NovCommend title="女生限免" data={this.props.data[3]}/>
                  <NovCommend title="男生限免" data={this.props.data[4]}/>
                  <NovList title="女生红文区" data={this.props.data[5]}/>
                  <NovList title="男生大神区" data={this.props.data[6]}/>
             </div>
		)
	}
}

export default ContentNover;