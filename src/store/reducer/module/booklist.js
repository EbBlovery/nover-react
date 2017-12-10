var defaultState = {  };

export default function Ranking(state = defaultState,action){
    var states = Object.assign({},state);
    switch(action.type){
    	case 'GETBOOKLIST':
    	    return {
    	    	...states,
    	    	booklists: action.payload.data,
    	    	booktotal: action.payload.total
    	    }
    	default :
    	    return states
    }
}
