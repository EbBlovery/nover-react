import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CommendDetail from '../../container/CommendDetail/commendDetail';

import './genderSection.less';

class GenderSection extends Component {
	render() {
		return (
            <section>
        		<ul>
        			{
        				this.props.data.books && this.props.data.books.map((item,index)=>{
                            return (
                                <li key={index}>
                                	<Link to="/">
                                        <CommendDetail data={item}/>
                                	</Link>
                                </li>
                            )
        				})
        			}
        		</ul>
        	</section>
		)
	}
}

export default GenderSection;

