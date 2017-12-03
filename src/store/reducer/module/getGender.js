var defaultState = { data:[] }

export default function getGender(state = defaultState,action){
     var states = Object.assign({},state);
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
          case 'GETCLASSIFY':
               return {
                    ...states,
                    classify: action.payload.data.data
               }
     	default :
     	     return states
     }
}