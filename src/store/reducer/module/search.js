var defaultState = { data:[] }

function search(state = defaultState,action){
     var states = Object.assign({},state);
     switch(action.type){
     	case 'GETNEWSINFO':
     	    states = action.payload.data
     	    return states
     	default :
     	    return states
     }
}

export default search;

