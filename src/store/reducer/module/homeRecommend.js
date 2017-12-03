var defaultState = { }

function homeRecommend(state = defaultState,action){
     var states = Object.assign({},state);
     switch(action.type){
     	case 'GETHOMECOMMEND':
     	    return {
     	    	...states,
     	    	homeData: action.payload.data
     	    }
     	case 'GETMORERECOMMEND':
     	    return {
     	    	...states,
     	    	moreRecommend: action.payload.data
     	    }
     	case 'GETNEWSINFO':
     	    return {
                ...states,
                searchData: action.payload.data.books,
                title: action.payload.title
     	    }
     	default :
     	    return states
     }
}

export default homeRecommend;