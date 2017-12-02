var defaultState = { data:[] };

export default function Ranking(state = defaultState,action){
    var states = Object.assign({},state);
    switch(action.type){
    	case 'RANKING_DETAIL':
    	    return {
    	    	...states,
    	    	rank: action.payload.data
    	    }
    	default :
    	    return states
    }
}
