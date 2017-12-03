import React, {Component} from 'react';
import { connect } from 'react-redux';

import Footer from '../../component/Footer/footer';
import ClassifyContent from '../../component/ClassifyContent/classifyContent';

import {fetchClassify} from '../../apiconfig/api.js';

import { getClassify } from '../../store/action/index';

import './classify.less';

class Classify extends Component {
	componentDidMount(){
        this.props.getClassify()
	}
	render() {
		return (
            <div>
                <div>
                	<section key="sect1" className="classify-section">
                		<ClassifyContent history={this.props.history} gender="male" title="男生" data={this.props.classify?this.props.classify.male:''}/>
                	</section>
                	<section key="sect2" className="classify-section">
                		<ClassifyContent history={this.props.history} gender="female" title="女生" data={this.props.classify?this.props.classify.female:''}/>
                	</section>
                	<section key="sect3" className="classify-section">
                		<ClassifyContent history={this.props.history} gender="press" title="传记" data={this.props.classify?this.props.classify.press:''}/>
                	</section>
                </div>
                <Footer history={this.props.history}/>
            </div>
		)
	}
}

function mapStateToProps(state){
    console.log(state)
    return {
        classify: state.getGender.classify
    }
}

function mapDispatchToProps(dispatch){
    return {
        getClassify: () => {
            dispatch(getClassify())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Classify);

