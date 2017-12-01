var defaultState = { data:[] }

export default function getGender(state = defaultState,action){
     var states = Object.assign({},state);
     switch(action.type){
     	case 'GETGENDERINFO':
     	    states = action.payload.data
     	    return states
     	case 'GETMOREGENDERINFO':
     	    console.log(states)
     	default :
     	    return states
     }
}