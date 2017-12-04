var defaultState = {
    
}

function search(state = defaultState,action){
     var states = Object.assign({},state);
     switch(action.type){
     	case 'BOOKDETAILS':
     	    return {
     	    	...states,
     	    	bookdetail: action.payload.data
     	    }
     	case 'BOOKCOMMENTS':
     	    return {
     	    	...states,
     	    	comments: action.payload.data.reviews,
                total: action.payload.data.total
     	    }
     	case 'BOOKRECOMMENDS':
     	    return {
     	    	...states,
     	    	recommends: action.payload.data
     	    }
        case 'GETTOMORECOMMENTS':
            return {
                ...states,
                comments: states.comments.concat(action.payload.data)
            }
        case 'BOOKUSERCOMMENT':
            return {
                ...states,
                userCommment: action.payload.data
            }
        case 'GETMOREUSERCOMMENT':
            return {
                ...states,
                userCommment: states.userCommment.concat(action.payload.data)
            }
     	default :
     	    return states
     }
}

export default search;