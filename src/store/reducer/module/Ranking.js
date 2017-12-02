var defaultState = { data:[] };

export default function Ranking(state = defaultState,action){
    var states = Object.assign({},state);
    switch(action.type){
    	case 'RANKING_DETAIL':
    	    return {
    	    	...states,
    	    	rank: action.payload.data
    	    }
    	case 'GETRANKLIST':
    	    return {
    	    	rankList: action.payload.data.books,
    	    	rankTitle: action.payload.data.title,
    	    	rankId:{
    	    		monthRank:action.payload.data.monthRank,
    	    		totalRank:action.payload.data.totalRank,
    	    		weekRank:action.payload.data._id
    	    	}
    	    }
    	case 'GETOTHERRANKLIST':
    	    return {
    	    	...states,
    	    	rankList: action.payload.data.books
    	    }
    	default :
    	    return states
    }
}
