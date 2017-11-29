import React, {Component} from 'react';

import Footer from '../../component/Footer/footer';
import ClassifyContent from '../../component/ClassifyContent/classifyContent';

import {fetchClassify} from '../../apiconfig/api.js';

import './classify.less';

class Classify extends Component {
	constructor(props){
        super(props)
        this.state = {
        	data: []
        }
	}
	componentDidMount(){
        fetchClassify().then(res=>{
        	this.setState({data:res.data})
        })
	}
	render() {
		console.log(this.state.data)
		return (
            <div>
                <div>
                	<section key="sect1" className="classify-section">
                		<ClassifyContent title="男生" data={this.state.data.male}/>
                	</section>
                	<section key="sect2" className="classify-section">
                		<ClassifyContent title="女生" data={this.state.data.female}/>
                	</section>
                	<section key="sect3" className="classify-section">
                		<ClassifyContent title="传记" data={this.state.data.press}/>
                	</section>
                </div>
                <Footer history={this.props.history}/>
            </div>
		)
	}
}


export default Classify;

