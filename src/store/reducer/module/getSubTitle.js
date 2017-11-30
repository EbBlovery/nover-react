
var defaultState = { data:[] }

export default function getSubTitle(state = defaultState,action){
     var states = Object.assign({},state);
     switch(action.type){
     	case 'GETSUBTITLE':
     	    states = action.payload.data
     	    return states
     	default :
     	    return states
     }
}