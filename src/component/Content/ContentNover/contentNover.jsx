import React, { Component } from 'react';

import NovList from '../../../container/NovList/novList';
import NovCommend from '../../../container/NovCommend/novCommend';

class ContentNover extends Component {
	render(){
		return (
             <div key="index">
             	<NovList id="5912825ba1dbf3ad33ee7ffe" title="女生最爱" data={this.props.data[0]}/>
                  <NovList id="59128334694d1cda365b8985" title="男生热门" data={this.props.data[1]}/>
                  <NovCommend id="59128365e5a3262c37488e3d" title="出版精品" data={this.props.data[2]}/>
                  <NovCommend id="5912a9d08973b2fe33614642" title="女生限免" data={this.props.data[3]}/>
                  <NovCommend id="5912aa17e647570434175d34" title="男生限免" data={this.props.data[4]}/>
                  <NovList id="5912872f8973b2fe3361463f" title="女生红文区" data={this.props.data[5]}/>
                  <NovList show={true} id="591284376e2e237c36d7b8bd" title="男生大神区" data={this.props.data[6]}/>
             </div>
		)
	}
}

export default ContentNover;