import React, { Component } from 'react';

class BookTagList extends Component {
	render() {
		return (
            <slider>
             	<div class="item-section">
                    <h4 class="title">性别</h4>
                    <ul>
                        <li onClick={this.getBookListsByTag.bind(this,'gender=male')}>男生</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'gender=female')}>女生</li>                    
                    </ul>
                </div>
                <div class="item-section">
                    <h4 class="title">时空</h4>
                    <ul>
                        <li onClick={this.getBookListsByTag.bind(this,'tag=都市')}>都市</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=古代')}>古代</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=科幻')}>科幻</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=架空')}>架空</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=重生')}>重生</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=未来')}>未来</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=穿越')}>穿越</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=历史')}>历史</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=快穿')}>快穿</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=末世')}>末世</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=异界位面')}>异界位面</li>                        
                    </ul>
                </div>
                
                <div class="item-section">
                    <h4 class="title">情感</h4>
                    <ul>
                        <li onClick={this.getBookListsByTag.bind(this,'tag=纯爱')}>纯爱</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=热血')}>热血</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=言情')}>言情</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=现言')}>现言</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=古言')}>古言</li>                        
                        <li onCLick={this.getBookListsByTag.bind(this,'tag=情有独钟')}>情有独钟</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=搞笑')}>搞笑</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=青春')}>青春</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=欢喜冤家')}>欢喜冤家</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=爽文')}>爽文</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=虐文')}>虐文</li>                        
                    </ul>
                </div>
                
                <div class="item-section">
                    <h4 class="title">流派</h4>
                    <ul>
                        <li onClick={this.getBookListsByTag.bind(this,'tag=变身')}>变身</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=悬疑')}>悬疑</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=系统')}>系统</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=网游')}>网游</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=推理')}>推理</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=玄幻')}>玄幻</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=武侠')}>武侠</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=仙侠')}>仙侠</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=恐怖')}>恐怖</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=奇幻')}>奇幻</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=洪荒')}>洪荒</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=犯罪')}>犯罪</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=百合')}>百合</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=种田')}>种田</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=惊悚')}>惊悚</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=轻小说')}>轻小说</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=技术流')}>技术流</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=耽美')}>耽美</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=竞技')}>竞技</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=无限')}>无限</li>                        
                    </ul>
                </div>
                
                <div class="item-section">
                    <h4 class="title">人设</h4>
                    <ul>
                        <li onClick={this.getBookListsByTag.bind(this,'tag=同人')}>同人</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=娱乐明星')}>娱乐明星</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=女强')}>女强</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=帝王')}>帝王</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=职场')}>职场</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=女配')}>女配</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=网配')}>网配</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=火影')}>火影</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=金庸')}>金庸</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=豪门')}>豪门</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=扮猪吃虎')}>扮猪吃虎</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=谋士')}>谋士</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=特种兵')}>特种兵</li>                        
                        <li onClick={this.getBookListsByTag.bind(this,'tag=教师')}>教师</li>                        
                    </ul>
                </div>
            </slider>
		)
	}
    getBookListsByTag(tag){
    	
    }
}

export default BookTagList;