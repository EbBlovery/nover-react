var defaultState = { }

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
     	    	comments: action.payload.data
     	    }
     	case 'BOOKRECOMMENDS':
     	    return {
     	    	...states,
     	    	recommends: action.payload.data
     	    }
     	default :
     	    return states
     }
}

export default search;