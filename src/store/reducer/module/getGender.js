var defaultState = { data:[] }

export default function getGender(state = defaultState,action){
     var states = Object.assign({},state);
     console.log(action)
     switch(action.type){
     	case 'GETGENDERINFO':
     	     return {
                    ...states,
                    data: action.payload.data.books,
                    total: action.payload.data.total
               }
     	case 'GETMOREGENDERINFO':
               return {
                    ...states,
                    data: states.data.concat(action.payload.data.books),
                    total: action.payload.data.total
               }
          case 'GETSUBTITLE':
               return {
                    ...states,
                    nav: action.payload.data
               }
     	default :
     	    return states
     }
}