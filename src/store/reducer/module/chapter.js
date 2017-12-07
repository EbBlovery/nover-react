var defaultState = {
    
}

function chapter(state = defaultState,action){
     var states = Object.assign({},state);
     switch(action.type){
     	case 'GETCHAPTERLIST':
     	    return {
     	    	...states,
     	    	chapterlist: action.payload.chapter,
                source: action.payload.source
     	    }
     	default :
     	    return states
     }
}

export default chapter;