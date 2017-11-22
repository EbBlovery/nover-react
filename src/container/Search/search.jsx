import React, { Component } from 'react';

import './search.less'; 

class Search extends Component {
	render() {
		return (
            <div className="search">
                <div>
                	<label>
	            		<input placeholder="aaa" id="search-text" type="text" />
	            	</label>
                </div>
            	<div>
            	    <span><img src={require("../../assets/search.svg")} /></span>
            	</div>
            </div>
		)
	}
}

export default Search;