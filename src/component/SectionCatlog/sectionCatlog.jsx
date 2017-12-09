import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SectionCatlog extends Component {
	render() {
		const {chapterlist,isShowChapter} = this.props;
		return (
            <section style={{transform:isShowChapter?'translateX(0)':'translateX(-100%)'}} className="section-list">
    		    <p className="section-catalog">目录</p>  
    			<ul className="section-ul">
    			    {
    			    	// 此栏目为目录
                        chapterlist && chapterlist.map((item,index)=>{
                            const i = index + 1;
                        	return (
                        		<li onClick={this.getClickChapter.bind(this)} key={index}>
                                    <Link replace to={{
                                        pathname: "/sectionContents/" + this.props.match.params.id +"/" + i,
                                        state: {
                                            link:item.link,
                                            title:item.title
                                        }
                                    }}>
                    	                 <p>{index+1 || 0} {item.title}</p>
                                    </Link>
                    	       </li>
                        	)
                        })
    			    }
    			</ul>
    			<p onClick={this.handleCloseChapter.bind(this)} className="section-close">close</p>
        	</section>
		)
	}
	handleCloseChapter(){
        this.props.handleCloseChapter()
	}
	getClickChapter(){
		
	}
}

export default SectionCatlog;